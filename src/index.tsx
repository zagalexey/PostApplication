import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'

import { Provider } from 'react-redux'
import { store } from './app/store'

import ArticleDetailed from './components/molecules/ArticleDetailed'
import CreateArticlePage from './components/pages/CreateArticlePage'
import EditArticlePage from './components/pages/EditArticlePage'
import LoginPage from './components/pages/LoginPage'
import App from './App'

import './index.css'

import MyArticlesPage from './components/pages/MyArticlesPage'
import ErrorPage from './components/pages/ErrorPage'

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />
	},
	{
		path: '/login',
		element: <LoginPage />
	},
	{
		path: '/articles/:articleId',
		element: <ArticleDetailed />
	},
	{
		path: '/myarticles',
		element: <MyArticlesPage />
	},
	{
		path: '/editarticle/:articleId',
		element: <EditArticlePage />
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
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
)
