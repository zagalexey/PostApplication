import React, { FC, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useParams } from 'react-router-dom'

import RelatedArticlesLoading from './RelatedArticlesLoading'
import RelatedArticle from './RelatedArticle'

import { IArticle } from '../../models'

const RelatedArticles: FC = () => {
	const [relatedArticles, setRelatedArticles] = useState<IArticle[] | null>(null)
	const [relatedArticlesAreLoading, setRelatedArticlesAreLoading] = useState(true)
	const { articleId } = useParams()

	useEffect(() => {
		axios
			.get('http://localhost:3000/articles/')
			.then((res: AxiosResponse<IArticle[]>) => {
				setRelatedArticles(res.data.filter((item) => item.id !== Number(articleId)))
				setRelatedArticlesAreLoading(false)
			})
			.catch((e) => console.log(e))
	}, [articleId])

	return (
		<div className={'w-[346px] h-fit pl-10 border-l-2'}>
			<h1 className={'text-2xl font-bold mb-[32px]'}>Related articles</h1>
			{relatedArticlesAreLoading ? (
				<RelatedArticlesLoading />
			) : (
				relatedArticles!.map((rArticle) => <RelatedArticle key={rArticle.id} article={rArticle} />)
			)}
		</div>
	)
}

export default RelatedArticles
