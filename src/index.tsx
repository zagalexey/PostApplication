import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import PostDetailed from './components/PostDetailed'
import MyArticles from './components/MyArticles'
import CreateArticlePage from './components/CreateArticlePage'
import { Provider } from 'react-redux'
import { store } from './app/store'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/detail',
		element: <PostDetailed />
	},
	{
		path: '/myarticles',
		element: <MyArticles />
	},
	{
		path: '/createarticle',
		element: <CreateArticlePage />
	}
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
			{/*<Wrapper>*/}
			{/*	<RouterProvider router={router} />*/}
			{/*</Wrapper>*/}
		</Provider>
	</React.StrictMode>
)
