import React from 'react'

interface IRelatedArticlesWrapperProps {
	children: React.ReactNode
}

const RelatedArticlesWrapper: React.FunctionComponent<IRelatedArticlesWrapperProps> = ({ children }) => {
	return (
		<div className={'w-[346px] h-fit pl-10 border-l-2'}>
			<h1 className={'text-2xl font-bold mb-[32px]'}>Related articles</h1>
			{children}
		</div>
	)
}

export default RelatedArticlesWrapper
