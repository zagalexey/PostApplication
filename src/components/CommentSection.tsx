import React from 'react'

interface ICommentSectionProps {
	children: React.ReactNode
}

const CommentSection: React.FunctionComponent<ICommentSectionProps> = ({ children }) => {
	return (
		<div className={'w-full h-auto mt-[25px] flex flex-col gap-2'}>
			<h1 className={'text-2xl font-bold'}>Comments (4)</h1>
			<div className={'w-full h-[46px] mt-[25px] mb-[25px] flex gap-4'}>
				<img className={'w-[44px] h-[44px]'} src={require('../images/bg.jpg')} alt='' />
				<input className={'w-full h-full rounded px-2 border'} type='text' placeholder={'Join the discussion'} />
			</div>
			{children}
		</div>
	)
}

export default CommentSection
