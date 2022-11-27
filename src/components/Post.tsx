import React from 'react'

interface IPostProps {
	title: string
	perex: string
	createdAt: string
}

const Post: React.FunctionComponent<IPostProps> = ({ title, perex, createdAt }) => {
	const date = new Date(createdAt).toLocaleString('en', {
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
				<h1 className={'text-2xl'}>{title}</h1>
				<div className={'flex gap-4'}>
					<span className={'text-gray-500'}>Alexey</span> <span className={'text-gray-500'}>{date}</span>
				</div>
				<p>{perex}</p>
				<div className={'flex gap-4'}>
					<a className={'text-blue-600'} href='/'>
						Read whole article
					</a>
					<span className={'text-gray-500'}>4 comments</span>
				</div>
			</div>
		</div>
	)
}

export default Post
