import React from 'react'
import Wrapper from './Wrapper'
import ActionButton from './ActionButton'

interface ICreateArticlePageProps {}

const CreateArticlePage: React.FunctionComponent<ICreateArticlePageProps> = ({}) => {
	return (
		<Wrapper>
			<div className={'w-2/3 h-screen mt-[48px]'}>
				<div className={'flex gap-6 items-center mb-[40px]'}>
					<h1 className={'text-2xl font-bold'}>Create new article</h1>
					<ActionButton name={'Publish Article'} />
				</div>
				<form className={'flex flex-col'}>
					<label className={'font-bold'} htmlFor={'title'}>
						Article Title
					</label>
					<input id={'title'} className={'border rounded h-[46px] px-2 mt-[8px]'} type='text' placeholder={'My First Article'} />
					<label className={'mt-[32px] font-bold'} htmlFor={'imageUpload'}>
						Featured image
					</label>
					<input id={'imageUpload'} type={'file'} className={'mt-[8px]'} />
					<label className={'mt-[32px] font-bold'} htmlFor={'content'}>
						Content
					</label>
					<textarea id={'content'} className={'w-full border rounded mt-[8px]'} rows={20} placeholder={'Supports markdown. Yay!'}></textarea>
				</form>
			</div>
		</Wrapper>
	)
}

export default CreateArticlePage
