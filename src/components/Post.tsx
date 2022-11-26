import React from 'react'

interface IPostProps {}

const Post: React.FunctionComponent<IPostProps> = () => {
	return (
		<div className={'flex gap-5'}>
			<img className={'w-[272px] h-[244px]'} src={require('../images/img.jpg')} alt='image' />
			<div className={'w-[561px] flex flex-col gap-4'}>
				<h1 className={'text-2xl'}>Title</h1>
				<div className={'flex gap-4'}>
					<span className={'text-gray-500'}>Author</span> <span className={'text-gray-500'}>02/13/17</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque corporis deserunt eius error, exercitationem fuga laboriosam
					nostrum perferendis porro provident quia quidem reiciendis repellendus suscipit ullam veritatis voluptates voluptatibus.
				</p>
				<div className={'flex gap-4'}>
					<a className={'text-blue-600'} href='/'>
						Read whole article
					</a>{' '}
					<span className={'text-gray-500'}>4 comments</span>
				</div>
			</div>
		</div>
	)
}

export default Post
