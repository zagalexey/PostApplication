import React, { useState } from 'react'
import LoginPage from './components/LoginPage'
import Post from './components/Post'
import PostsWrapper from './components/PostsWrapper'
import Wrapper from './components/Wrapper'
import { useAppSelector } from './app/hooks'

function App() {
	const { isLoggedIn } = useAppSelector((state) => state.login)

	return (
		<Wrapper>
			{!isLoggedIn ? (
				<LoginPage />
			) : (
				<div className=''>
					<h1 className={'text-4xl mt-[64px]'}>Recent articles</h1>
					<PostsWrapper>
						<Post />
						<Post />
						<Post />
					</PostsWrapper>
				</div>
			)}
		</Wrapper>
	)
}

export default App
