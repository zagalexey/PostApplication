import React from 'react'

interface IRelatedArticleProps {}

const RelatedArticle: React.FunctionComponent<IRelatedArticleProps> = ({}) => {
	return (
		<div>
			<h1 className={'text-xl font-bold mb-[8px]'}>Article name</h1>
			<div className={'bg-green-500 h-fit w-full line-clamp-3'}>
				A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators.
				Whiskers are highly ...
			</div>
		</div>
	)
}

export default RelatedArticle
