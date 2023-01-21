import React, { FC, FormEvent, useRef, useState } from 'react'
import axios from 'axios'

import ActionButton from '../atoms/ActionButton'
import Wrapper from '../wrappers/Wrapper'

import { IArticle } from '../../models'
import AuthWrapper from '../wrappers/AuthWrapper'
import { Alert, Snackbar } from '@mui/material'

const CreateArticlePage: FC = () => {
	const titleRef = useRef<HTMLInputElement | null>(null)
	const contentRef = useRef<HTMLTextAreaElement | null>(null)
	const [isPostSuccessful, setIsPostSuccessful] = useState(false)

	const generateID = (): number => {
		return Math.floor(Math.random() * 10000)
	}

	const createArticleHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (titleRef.current && contentRef.current) {
			const date = new Date().toISOString()
			let sentences = contentRef.current?.value.split(/[.!?]+/)
			let perex = sentences.slice(0, 2).join('. ') + '.'

			const newArticle: IArticle = {
				id: generateID(),
				title: titleRef.current?.value,
				content: contentRef.current?.value,
				imageUrl: 'newPost.gif',
				createdAt: date,
				lastUpdatedAt: date,
				author: 'Elisabeth Strain',
				perex: perex,
				comments: []
			}

			axios
				.post('http://localhost:3000/articles', newArticle)
				.then((res) => {
					setIsPostSuccessful(true)
					titleRef.current!.value = ''
					contentRef.current!.value = ''
				})
				.catch((e) => console.log(e))
		}
	}

	const snackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		setIsPostSuccessful(false)
	}

	return (
		<AuthWrapper>
			<Wrapper>
				<Snackbar open={isPostSuccessful} autoHideDuration={1500} onClose={snackbarClose}>
					<Alert onClose={snackbarClose} severity='success' sx={{ width: '100%' }}>
						This is a success message!
					</Alert>
				</Snackbar>
				<div className={'w-2/3 h-screen mt-[48px]'}>
					<form onSubmit={(e) => createArticleHandler(e)} className={'flex flex-col'}>
						<div className={'flex gap-6 items-center mb-[40px]'}>
							<h1 className={'text-3xl font-bold'}>Create new article</h1>
							<ActionButton name={'Publish Article'} />
						</div>
						<label className={'font-bold'} htmlFor={'title'}>
							Article Title
						</label>
						<input
							ref={titleRef}
							id={'title'}
							className={'border rounded h-[46px] px-2 mt-[8px]'}
							type='text'
							placeholder={'My First Article'}
						/>
						<label className={'mt-[32px] font-bold'} htmlFor={'imageUpload'}>
							Featured image
						</label>
						<input id={'imageUpload'} type={'file'} className={'mt-[8px]'} />
						<label className={'mt-[32px] font-bold'} htmlFor={'content'}>
							Content
						</label>
						<textarea
							ref={contentRef}
							id={'content'}
							className={'w-full border rounded mt-[8px] px-2'}
							rows={20}
							placeholder={'Supports markdown. Yay!'}
						></textarea>
					</form>
				</div>
			</Wrapper>
		</AuthWrapper>
	)
}

export default CreateArticlePage
