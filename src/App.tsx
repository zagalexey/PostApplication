import React, { useEffect, useState } from 'react'
import LoginPage from './components/LoginPage'
import Post from './components/Post'
import PostsWrapper from './components/PostsWrapper'
import Wrapper from './components/Wrapper'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { getPosts, postComment } from './app/actionCreators'

function App() {
	const { isLoggedIn } = useAppSelector((state) => state.login)
	const articles = useAppSelector((state) => state.articles)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	// const postCommentHandler = () => {
	// 	const newComment = {
	// 		commentId: '9be76180-6dd4-11ed-b4cf-d3e2c7cfa001',
	// 		articleId: '1e7589ee-7d99-4e1c-8bcf-1f2ee790e075',
	// 		author: 'alexey',
	// 		content: 'Some comment',
	// 		postedAt: 'today',
	// 		score: 10
	// 	}
	// 	dispatch(postComment())
	// }

	return (
		<Wrapper>
			{!isLoggedIn ? (
				<LoginPage />
			) : (
				<div className=''>
					<h1 className={'text-4xl mt-[64px]'}>Recent articles</h1>
					<PostsWrapper>
						{/*<button onClick={() => dispatch(getPosts())}>fetch posts</button>*/}
						{articles.inPending && <h1>Articles are loading...</h1>}
						{articles.articlesRejected && <h1>Some error happened</h1>}

						{articles.articles.length ? (
							Array.from(articles.articles).map((article: any) => <Post key={article.articleId} article={article} />)
						) : (
							<>
								<h1>No Data!</h1>
							</>
						)}
						{/*<button onClick={() => dispatch(postComment())}>Post comment</button>*/}
					</PostsWrapper>
				</div>
			)}
		</Wrapper>
	)
}

export default App
