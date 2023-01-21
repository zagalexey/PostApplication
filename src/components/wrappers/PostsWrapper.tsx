import React, { FC } from 'react'

interface IPostsWrapperProps {
	children: React.ReactNode
}

const PostsWrapper: FC<IPostsWrapperProps> = ({ children }) => {
	return <div className={'mt-[64px] flex flex-col gap-6'}>{children}</div>
}

export default PostsWrapper
