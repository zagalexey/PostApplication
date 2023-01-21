import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { IArticle } from '../../models'

interface IRelatedArticleProps {
	article: IArticle
}

const RelatedArticle: FC<IRelatedArticleProps> = ({ article }) => {
	return (
		<Link
			to={`/articles/${article.id}`}
			className={'block mb-8 hover:cursor-pointer hover:text-blue-400'}
		>
			<h1 className={'text-xl font-bold mb-[8px] max-h-[60px] line-clamp-2'}>{article.title}</h1>
			<div className={'h-fit w-full line-clamp-3'}>{article.perex}</div>
		</Link>
	)
}

export default RelatedArticle
