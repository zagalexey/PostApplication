import React from 'react'
import { useParams } from 'react-router-dom'

interface ISinglePageProps {}

const SinglePage: React.FunctionComponent<ISinglePageProps> = ({}) => {
	const { id } = useParams()
	return (
		<div>
			<h1>Single Page</h1>
			<h2>{id}</h2>
		</div>
	)
}

export default SinglePage
