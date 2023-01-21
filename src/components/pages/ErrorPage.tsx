import React from 'react'
import { useRouteError } from 'react-router-dom'

interface IErrorPageProps {}

const ErrorPage: React.FunctionComponent<IErrorPageProps> = ({}) => {
	const error = useRouteError()
	console.error(error)

	return (
		<div className={'w-full'}>
			<h1 className={'text-2xl font-bold place-content-center text-center mt-10'}>
				404 Page not found!
			</h1>
		</div>
	)
}

export default ErrorPage
