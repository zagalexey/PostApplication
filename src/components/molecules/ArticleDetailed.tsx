import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ArticleDetailedLoading from './ArticleDetailedLoading'
import CommentSection from '../wrappers/CommentSection'
import RelatedArticles from './RelatedArticles'
import Paragraph from '../atoms/Paragraph'
import Wrapper from '../wrappers/Wrapper'
import Comment from '../atoms/Comment'

import { IArticle } from '../../models'

const ArticleDetailed: FC = () => {
	const [articleDetailed, setArticleDetailed] = useState<IArticle | null>(null)
	const [articleContent, setArticleContent] = useState<string[] | null>(null)
	const [isArticleLoading, setIsArticleLoading] = useState<boolean>(true)

	const { articleId } = useParams()

	useEffect(() => {
		fetchArticle()
	}, [articleId])

	useEffect(() => {
		if (articleDetailed) {
			let textArr = articleDetailed.content.split(/\n+/g)
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
				setIsArticleLoading(false)
			})
			.catch((e) => console.log(e))
	}

	const updatePage = () => {
		fetchArticle()
	}

	// @ts-ignore
	return (
		<Wrapper>
			<div className={'w-full h-full pt-[62px]'}>
				<div className={'flex gap-10'}>
					{isArticleLoading ? (
						<ArticleDetailedLoading />
					) : (
						<div className={'w-[760px] h-full flex flex-col'}>
							<h1 className={'text-2xl font-bold mb-[24px]'}>{articleDetailed?.title}</h1>
							<div className={'flex gap-4 mb-[24px]'}>
								<span className={'text-gray-500'}>Elisabeth Strain</span>
								<span className={'text-gray-500'}>{date}</span>
							</div>
							<img
								className={'h-[504px] w-full mb-[24px] object-cover'}
								src={articleDetailed ? require(`../../images/${articleDetailed!.imageUrl}`) : ''}
								alt='image'
							/>
							<div>
								{articleContent ? (
									articleContent.map((text, index) => <Paragraph key={index}>{text}</Paragraph>)
								) : (
									<h2>No content</h2>
								)}
							</div>
							<hr />
							<CommentSection
								updatePage={updatePage}
								numberOfComments={articleDetailed!.comments.length}
							>
								{articleDetailed ? (
									articleDetailed.comments.map((comment) => (
										<Comment key={comment.id} updatePage={updatePage} comment={comment} />
									))
								) : (
									<></>
								)}
							</CommentSection>
						</div>
					)}
					<RelatedArticles />
				</div>
			</div>
		</Wrapper>
	)
}

export default ArticleDetailed
