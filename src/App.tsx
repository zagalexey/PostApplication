import React, { useEffect, useState } from 'react'

import ArticlesLoading from './components/molecules/ArticlesLoading'
import PostsWrapper from './components/wrappers/PostsWrapper'
import Article from './components/molecules/Article'
import Wrapper from './components/wrappers/Wrapper'

import { getArticles } from './app/actionCreators'
import { useAppDispatch, useAppSelector } from './app/hooks'

import { IArticle } from './models'
import { Outlet } from 'react-router-dom'

function App() {
	const [articles, setArticles] = useState<IArticle[] | null>(null)

	const selector = useAppSelector((state) => state.articles)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getArticles())
	}, [])

	useEffect(() => {
		if (selector.articles) {
			let sortedArticlesByDay: IArticle[] = [...selector.articles]
			sortedArticlesByDay.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
			setArticles(sortedArticlesByDay)
		}
	}, [selector.articles])

	if (selector.inPending)
		return (
			<Wrapper>
				<h1 className={'text-4xl mt-[64px]'}>Recent articles</h1>
				<PostsWrapper>
					<ArticlesLoading />
				</PostsWrapper>
			</Wrapper>
		)
	if (selector.articlesRejected)
		return (
			<Wrapper>
				<div className={'w-full py-4 place-content-center text-center'}>
					<h1 className={'font-bold text-2xl'}>Some error happened!</h1>
				</div>
			</Wrapper>
		)

	return (
		<Wrapper>
			<div>
				<h1 className={'text-4xl mt-[64px]'}>Recent articles</h1>
				<PostsWrapper>
					{articles ? (
						Array.from(articles).map((article: IArticle) => (
							<Article key={article.id} article={article} />
						))
					) : (
						<div className={'w-full py-4 place-content-center text-center'}>
							<h1 className={'font-bold text-2xl'}>No articles found!</h1>
						</div>
					)}
				</PostsWrapper>
				<Outlet />
			</div>
		</Wrapper>
	)
}

export default App
