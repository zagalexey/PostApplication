import React, { FormEvent, useRef, useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { postComment } from '../app/actionCreators'
import { commentArgs } from '../models'
import { useParams } from 'react-router-dom'

interface ICommentSectionProps {
	children: React.ReactNode
}

const CommentSection: React.FunctionComponent<ICommentSectionProps> = ({ children }) => {
	const [commentContent, setCommentContent] = useState<string>('')
	// const inputRef = useRef<HTMLInputElement | null>(null)
	const dispatch = useAppDispatch()
	const { articleId } = useParams()

	const handleInput = async (e: FormEvent<HTMLFormElement>) => {
		// e.preventDefault()
		const commentData: commentArgs = {
			articleId: Number(articleId),
			author: 'Elisabeth Strain',
			content: commentContent
		}
		await dispatch(postComment(commentData))
		setCommentContent('')
	}

	return (
		<div className={'w-full h-auto mt-[25px] flex flex-col gap-2'}>
			<h1 className={'text-2xl font-bold'}>Comments (4)</h1>
			<div className={'w-full h-[46px] mt-[25px] mb-[25px] flex gap-4'}>
				<img className={'w-[44px] h-[44px]'} src={require('../images/bg.jpg')} alt='' />
				<form onSubmit={(e) => handleInput(e)} className={'w-full h-full'}>
					<input
						className={'w-full h-full rounded px-2 border'}
						type='text'
						placeholder={'Join the discussion'}
						value={commentContent}
						onChange={(e) => setCommentContent(e.target.value)}
					/>
					<button type={'submit'} className={'invisible'}>
						Submit
					</button>
				</form>
			</div>
			{children}
		</div>
	)
}

export default CommentSection
