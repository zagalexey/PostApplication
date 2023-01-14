import React, { useEffect, useState } from 'react'
import CommentSection from './CommentSection'
import Comment from './Comment'
import RelatedArticlesWrapper from './RelatedArticlesWrapper'
import RelatedArticle from './RelatedArticle'
import Paragraph from './Paragraph'
import Wrapper from './Wrapper'
import { useParams } from 'react-router-dom'

import Img from '../images/img.jpg'
import { IArticle } from '../models'
import axios from 'axios'

interface IPostDetailedProps {}

const PostDetailed: React.FunctionComponent<IPostDetailedProps> = () => {
	const [articleDetailed, setArticleDetailed] = useState<IArticle | null>(null)
	const [articleContent, setArticleContent] = useState<string[] | null>(null)

	const { articleId } = useParams()

	useEffect(() => {
		fetchArticle()
	}, [articleId])

	useEffect(() => {
		if (articleDetailed) {
			let textArr = articleDetailed.content.split(/\n+/g)
			console.log(textArr)
			setArticleContent(textArr)
		}
	}, [articleDetailed])

	const date = articleDetailed
		? new Date(articleDetailed.createdAt).toLocaleString('en', {
				day: 'numeric',
				month: 'numeric',
				year: 'numeric',
				hour12: false,
				timeZone: 'UTC'
		  })
		: ''

	const fetchArticle = () => {
		axios
			.get(`http://localhost:3000/articles/${articleId}?_embed=comments`)
			.then((res) => {
				setArticleDetailed(res.data)
			})
			.catch((e) => console.log(e))
	}

	return (
		<Wrapper>
			<div className={'w-full h-full pt-[62px]'}>
				<div className={'flex gap-10'}>
					<div className={'w-[760px] h-full flex flex-col'}>
						{/*<h1 className={'text-2xl font-bold mb-[24px]'}>title</h1>*/}
						<h1 className={'text-2xl font-bold mb-[24px]'}>{articleDetailed?.title}</h1>
						<div className={'flex gap-4 mb-[24px]'}>
							<span className={'text-gray-500'}>Elisabeth Strain</span>
							<span className={'text-gray-500'}>{date}</span>
						</div>
						<img
							className={'h-[504px] mb-[24px] object-cover'}
							src={
								articleDetailed?.imageUrl
									? articleDetailed.imageUrl
									: `https://loremflickr.com/1000/1000/dog?random=${articleDetailed!.id}`
							}
							alt='image'
						/>
						<div>
							{/*<h2>Marianne or husbands if at stronger ye</h2>*/}
							{articleContent ? (
								articleContent.map((text, index) => <Paragraph key={index}>{text}</Paragraph>)
							) : (
								<h2>No content</h2>
							)}
						</div>
						<hr />
						<CommentSection>
							{articleDetailed ? (
								articleDetailed.comments.map((comment) => <Comment comment={comment} />)
							) : (
								<></>
							)}
						</CommentSection>
					</div>
					<RelatedArticlesWrapper>
						<RelatedArticle />
						<RelatedArticle />
						<RelatedArticle />
						<RelatedArticle />
					</RelatedArticlesWrapper>
				</div>
			</div>
		</Wrapper>
	)
}

export default PostDetailed
