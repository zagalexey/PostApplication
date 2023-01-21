import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

import { IComment } from '../../models'
import { VoteType } from '../../enums'

interface ICommentProps {
	comment: IComment
	updatePage: () => void
}

const Comment: FC<ICommentProps> = ({ comment, updatePage }) => {
	const [timeDiff, setTimeDiff] = useState<number | null>(null)

	useEffect(() => {
		setTimeDiff(countTimeDifference(comment.postedAt))
	}, [])

	const countTimeDifference = (dateString: string): number => {
		const givenDate = new Date(dateString)
		const currentDate = new Date()
		let difference = Math.floor(
			Math.abs((givenDate.getTime() - currentDate.getTime()) / 1000 / 60 / 60)
		)
		return difference
	}

	const putNewComment = (updatedComment: IComment) => {
		axios
			.put(`http://localhost:3000/comments/${comment.id}`, JSON.stringify(updatedComment), {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(() => updatePage())
			.catch((e) => console.log(e))
	}

	const voteHandle = (type: string) => {
		if (type === VoteType.LIKE) {
			let newScore = comment.score + 1
			const updatedComment = { ...comment, score: newScore }
			putNewComment(updatedComment)
		}
		if (type === VoteType.DISLIKE) {
			let newScore = comment.score - 1
			const updatedComment = { ...comment, score: newScore }
			putNewComment(updatedComment)
		}
	}

	const getVoteColor = (score: number): string => {
		if (score > 0) {
			return 'green'
		} else if (score < 0) {
			return 'red'
		} else {
			return 'black'
		}
	}

	return (
		<div className={'flex gap-4 my-2'}>
			<img
				className={'w-[44px] h-[44px]'}
				src={require(`../../images/avatars/${comment.image}`)}
				alt='avatar'
			/>
			<div className={'w-full h-auto flex flex-col'}>
				<div className={'flex gap-2'}>
					<span className={'font-bold'}>{comment.author}</span>{' '}
					<span className={'text-gray-500'}>
						{timeDiff === 0 ? '< 1 hour ago' : `${timeDiff} hours ago`}
					</span>
				</div>
				<p>{comment.content}</p>
				<div className={'flex items-center gap-1'}>
					<span className={'w-[30px]'} style={{ color: getVoteColor(comment.score) }}>
						{comment.score > 0 ? `+${comment.score}` : comment.score}
					</span>
					<div className={'w-[1px] h-[16px] bg-[#DFDFDF]'}></div>
					<button onClick={() => voteHandle(VoteType.LIKE)}>
						<img
							className={'w-[24px] h-[24px]'}
							src='https://img.icons8.com/ios-glyphs/30/null/collapse-arrow.png'
							alt={'like'}
						/>
					</button>
					<div className={'w-[1px] h-[16px] bg-[#DFDFDF]'}></div>
					<button onClick={() => voteHandle(VoteType.DISLIKE)}>
						<img
							className={'w-[24px] h-[24px]'}
							src='https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png'
							alt={'dislike'}
						/>
					</button>
					<div className={'w-[1px] h-[16px] bg-[#DFDFDF]'}></div>
				</div>
			</div>
		</div>
	)
}

export default Comment
