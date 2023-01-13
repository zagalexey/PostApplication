import React from 'react'
import { Link } from 'react-router-dom'
import { IArticle } from '../models'

interface IPostProps {
	article: IArticle
}

const Post: React.FunctionComponent<IPostProps> = ({ article }) => {
	const date = new Date(article.createdAt).toLocaleString('en', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour12: false,
		timeZone: 'UTC'
	})

	return (
		<div className={'flex gap-5'}>
			<img className={'w-[272px] h-[244px]'} src={require('../images/img.jpg')} alt='image' />
			<div className={'w-[561px] flex flex-col gap-4'}>
				<h1 className={'text-2xl'}>{article.title}</h1>
				<div className={'flex gap-4'}>
					<span className={'text-gray-500'}>Elisabeth Strain</span>{' '}
					<span className={'text-gray-500'}>{date}</span>
				</div>
				<p>{article.perex}</p>
				<div className={'flex gap-4'}>
					{/*<a className={'text-blue-600'} href='/detail'>*/}
					{/*	*/}
					{/*</a>*/}
					<Link className={'text-blue-600'} to={`/articles/${article.id}`}>
						Read whole article
					</Link>
					<span className={'text-gray-500'}>{article.comments.length} comments</span>
				</div>
			</div>
		</div>
	)
}

export default Post
