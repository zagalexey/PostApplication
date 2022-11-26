import React from 'react'

interface IPostsWrapperProps {
	children: React.ReactNode
}

const PostsWrapper: React.FunctionComponent<IPostsWrapperProps> = ({ children }) => {
	return <div className={'mt-[64px] flex flex-col gap-6'}>{children}</div>
}

export default PostsWrapper
