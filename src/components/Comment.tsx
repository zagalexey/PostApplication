import React from 'react'

interface ICommentProps {}

const Comment: React.FunctionComponent<ICommentProps> = () => {
	return (
		<div className={'flex gap-4 my-2'}>
			<img className={'w-[44px] h-[44px]'} src={require('../images/bg.jpg')} alt='image' />
			<div className={'w-full h-auto flex flex-col'}>
				<div className={'flex gap-2'}>
					<span className={'font-bold'}>Lily Hawkins</span> <span className={'text-gray-500'}>2 hours ago</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aut consectetur consequuntur cumque dolor ducimus eos
					esse est explicabo labore, nesciunt officia officiis omnis quas repellendus repudiandae sapiente voluptatibus.
				</p>
				<div className={'flex items-center gap-1'}>
					<span>+3</span>
					<div className={'w-[1px] h-[16px] bg-[#DFDFDF]'}></div>
					<button>
						<img className={'w-[24px] h-[24px]'} src='https://img.icons8.com/ios-glyphs/30/null/collapse-arrow.png' alt={'like'} />
					</button>
					<div className={'w-[1px] h-[16px] bg-[#DFDFDF]'}></div>
					<button>
						<img className={'w-[24px] h-[24px]'} src='https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png' alt={'dislike'} />
					</button>
					<div className={'w-[1px] h-[16px] bg-[#DFDFDF]'}></div>
				</div>
			</div>
		</div>
	)
}

export default Comment
