import React, { useEffect, useState } from 'react'
import { IComment } from '../models'

interface ICommentProps {
	comment: IComment
}

const Comment: React.FunctionComponent<ICommentProps> = ({ comment }) => {
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

	return (
		<div className={'flex gap-4 my-2'}>
			<img
				className={'w-[44px] h-[44px]'}
				src={require(`../images/avatars/${comment.image}`)}
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
					<span>{comment.score > 0 ? `+${comment.score}` : comment.score}</span>
					<div className={'w-[1px] h-[16px] bg-[#DFDFDF]'}></div>
					<button>
						<img
							className={'w-[24px] h-[24px]'}
							src='https://img.icons8.com/ios-glyphs/30/null/collapse-arrow.png'
							alt={'like'}
						/>
					</button>
					<div className={'w-[1px] h-[16px] bg-[#DFDFDF]'}></div>
					<button>
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
