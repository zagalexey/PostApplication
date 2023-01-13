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
import SinglePage from './components/SinglePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/:id',
		element: <SinglePage />
	},
	{
		path: '/articles/:articleId',
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
		</Provider>
	</React.StrictMode>
)
