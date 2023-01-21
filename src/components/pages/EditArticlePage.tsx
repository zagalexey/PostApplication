import { useNavigate, useParams } from 'react-router-dom'
import React, { FC, FormEvent, useEffect, useRef, useState } from 'react'
import axios from 'axios'

import ActionButton from '../atoms/ActionButton'
import Wrapper from '../wrappers/Wrapper'
import AuthWrapper from '../wrappers/AuthWrapper'
import { Alert, Snackbar } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import { IArticle } from '../../models'

const EditArticlePage: FC = () => {
	const [isEditedSuccessful, setIsEditedSuccessful] = useState(false)
	const [article, setArticle] = useState<IArticle | undefined>(undefined)

	const selector = useAppSelector((state) => state.articles)
	const navigate = useNavigate()
	const { articleId } = useParams()

	const titleRef = useRef<HTMLInputElement | null>(null)
	const contentRef = useRef<HTMLTextAreaElement | null>(null)

	useEffect(() => {
		if (selector.articles && articleId) {
			const data = selector.articles.find((article) => article.id === Number(articleId))
			setArticle(data)
		}
	}, [])

	const editHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newArticle = { ...article }
		if (titleRef.current && contentRef.current) {
			newArticle.title = titleRef.current?.value
			newArticle.content = contentRef.current?.value
			let sentences = newArticle.content.split(/[.!?]+/)
			newArticle.perex = sentences.slice(0, 2).join('. ') + '.'
			newArticle.lastUpdatedAt = new Date().toISOString()
			delete newArticle.id
			delete newArticle.comments
		}

		await axios
			.put(`http://localhost:3000/articles/${article!.id}`, JSON.stringify(newArticle), {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((res) => {
				setIsEditedSuccessful(true)
				setTimeout(() => {
					navigate('/myarticles')
				}, 2000)
			})
			.catch((e) => console.log(e))
	}

	const snackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		setIsEditedSuccessful(false)
	}

	return (
		<AuthWrapper>
			<Wrapper>
				<Snackbar open={isEditedSuccessful} autoHideDuration={1500} onClose={snackbarClose}>
					<Alert onClose={snackbarClose} severity='success' sx={{ width: '100%' }}>
						This is a success message!
					</Alert>
				</Snackbar>
				{article ? (
					<div className={'w-2/3 h-screen mt-[48px]'}>
						<form className={'flex flex-col'} onSubmit={(e) => editHandler(e)}>
							<div className={'flex gap-6 items-center mb-[40px]'}>
								<h1 className={'text-2xl font-bold'}>Edit article</h1>
								<ActionButton name={'Change Article'} />
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
								defaultValue={article!.title}
							/>
							<label className={'mt-[32px] font-bold'} htmlFor={'content'}>
								Content
							</label>
							<textarea
								ref={contentRef}
								id={'content'}
								className={'w-full border rounded px-2 mt-[8px]'}
								rows={20}
								placeholder={'Supports markdown. Yay!'}
								defaultValue={article!.content}
							></textarea>
						</form>
					</div>
				) : (
					<div className={'w-full'}>
						<h1 className={'text-2xl font-bold text-center mt-4'}>No article found!</h1>
					</div>
				)}
			</Wrapper>
		</AuthWrapper>
	)
}

export default EditArticlePage
