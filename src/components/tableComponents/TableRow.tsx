import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch } from '../../app/hooks'
import { deleteArticle, getArticles } from '../../app/actionCreators'

import { IArticle } from '../../models'

import ActionIcon from '../atoms/ActionIcon'

interface ITableRowProps {
	article: IArticle
}

const TableRow: FC<ITableRowProps> = ({ article }) => {
	const dispatch = useAppDispatch()

	const deleteArticleHandler = async () => {
		await dispatch(deleteArticle(article.id))
		setTimeout(() => {
			dispatch(getArticles())
		}, 300)
	}

	return (
		<tr className={'h-[48px] border-b'}>
			<td>{article.title}</td>
			<td>{article.perex}</td>
			<td>{article.author}</td>
			<td className={'text-start'}>{article.comments.length}</td>
			<td>
				<div className={'w-full h-full flex justify-start items-center gap-2'}>
					{/*<Link to={`/editarticle/${article.id}`} state={{ article: article }}>*/}
					<Link to={`/editarticle/${article.id}`}>
						<ActionIcon type={'edit'} />
					</Link>
					<ActionIcon
						className={'hover: cursor-pointer'}
						onClick={deleteArticleHandler}
						type={'delete'}
					/>
				</div>
			</td>
		</tr>
	)
}

export default TableRow
