import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import TableHeader from '../tableComponents/TableHeader'
import TableRow from '../tableComponents/TableRow'
import ActionButton from '../atoms/ActionButton'
import Wrapper from '../wrappers/Wrapper'

import { getArticles } from '../../app/actionCreators'
import { filterArticles } from '../../features/article/articleSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import AuthWrapper from '../wrappers/AuthWrapper'

const MyArticlesPage: FC = () => {
	const dispatch = useAppDispatch()
	const [filterAscending, setFilterAscending] = useState<boolean>(true)

	const articlesSelector = useAppSelector((state) => state.articles)

	useEffect(() => {
		dispatch(getArticles())
	}, [])

	const filterHandle = (target: string) => {
		dispatch(filterArticles({ target: target, isAscending: filterAscending }))
		setFilterAscending((prevState) => !prevState)
	}

	return (
		<AuthWrapper>
			<Wrapper>
				<div className={'mt-[48px]'}>
					<div className={'flex items-center gap-[44px] mb-[36px]'}>
						<h1 className={'text-3xl font-bold'}>My Articles</h1>
						<Link to={'/createArticle'}>
							<ActionButton name={'Create new article'} />
						</Link>
					</div>
					<table className={'w-full table-auto'}>
						<thead className={'border-b'}>
							<tr>
								<TableHeader title={'Title'} sortButtons={true} filterHandle={filterHandle} />
								<TableHeader title={'Perex'} sortButtons={true} filterHandle={filterHandle} />
								<TableHeader title={'Author'} sortButtons={true} filterHandle={filterHandle} />
								<TableHeader title={'Comments'} sortButtons={true} filterHandle={filterHandle} />
								<TableHeader title={'Actions'} />
							</tr>
						</thead>
						<tbody>
							{articlesSelector.articles &&
								articlesSelector.articles.map((article) => (
									<TableRow key={article.id} article={article} />
								))}
						</tbody>
					</table>
				</div>
			</Wrapper>
		</AuthWrapper>
	)
}

export default MyArticlesPage
