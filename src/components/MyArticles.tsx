import React from 'react'
import Wrapper from './Wrapper'
import TableRow from './tableComponents/TableRow'
import TableHeader from './tableComponents/TableHeader'
import ActionButton from './ActionButton'

interface IMyArticlesProps {}

const MyArticles: React.FunctionComponent<IMyArticlesProps> = ({}) => {
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
						<TableRow />
						<TableRow />
						<TableRow />
						<TableRow />
					</tbody>
				</table>
			</div>
		</Wrapper>
	)
}

export default MyArticles
