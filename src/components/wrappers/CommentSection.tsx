import React, { FC, FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { postComment } from '../../app/actionCreators'
import { useAppDispatch } from '../../app/hooks'

import { commentArgs } from '../../models'

interface ICommentSectionProps {
	numberOfComments: number
	updatePage: () => void
	children: React.ReactNode
}

const CommentSection: FC<ICommentSectionProps> = ({ children, numberOfComments, updatePage }) => {
	const [commentContent, setCommentContent] = useState<string>('')
	const dispatch = useAppDispatch()
	const { articleId } = useParams()

	const handleInput = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const commentData: commentArgs = {
			articleId: Number(articleId),
			author: 'Elisabeth Strain',
			content: commentContent
		}
		await dispatch(postComment(commentData))
		setCommentContent('')
		updatePage()
	}

	return (
		<div className={'w-full h-auto mt-[25px] flex flex-col gap-2'}>
			<h1 className={'text-2xl font-bold'}>Comments ({numberOfComments})</h1>
			<div className={'w-full h-[46px] mt-[25px] mb-[25px] flex gap-4'}>
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
