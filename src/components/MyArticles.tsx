import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import TableRow from './tableComponents/TableRow'
import TableHeader from './tableComponents/TableHeader'
import ActionButton from './ActionButton'
import { useParams } from 'react-router-dom'
import { IArticle } from '../models'
import axios from 'axios'

interface IMyArticlesProps {}

const MyArticles: React.FunctionComponent<IMyArticlesProps> = ({}) => {
	const [myArticles, setMyArticles] = useState<IArticle[] | null>(null)

	useEffect(() => {
		axios
			.get('http://localhost:3000/articles?_embed=comments')
			.then((res) => setMyArticles(res.data))
			.catch((e) => console.log(e))
	}, [])

	return (
		<Wrapper>
			<div className={'mt-[48px]'}>
				<div className={'flex items-center gap-[44px] mb-[36px]'}>
					<h1 className={'text-2xl font-bold'}>My Articles</h1>
					<ActionButton name={'Create new article'} />
				</div>
				<table className='w-full table-auto'>
					<thead className={'border-b'}>
						<tr>
							<TableHeader title={'Article Title'} sortButtons={true} />
							<TableHeader title={'Perex'} sortButtons={true} />
							<TableHeader title={'Author'} sortButtons={true} />
							<TableHeader title={'# of comments'} sortButtons={true} />
							<TableHeader title={'Actions'} sortButtons={false} />
						</tr>
					</thead>
					<tbody>
						{myArticles && myArticles.map((article) => <TableRow article={article} />)}
						{/*<TableRow />*/}
						{/*<TableRow />*/}
						{/*<TableRow />*/}
						{/*<TableRow />*/}
					</tbody>
				</table>
			</div>
		</Wrapper>
	)
}

export default MyArticles
