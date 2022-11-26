import React from 'react'

interface ITableHeaderProps {
	title: string
	sortButtons: boolean
}

const TableHeader: React.FunctionComponent<ITableHeaderProps> = ({ title, sortButtons }) => {
	return (
		<th>
			<div className={'flex items-center gap-2 justify-start'}>
				<span>{title}</span>
				{sortButtons && (
					<svg width='8' height='16' viewBox='0 0 8 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M7.46411 5.25L4.00001 0L0.535904 5.25H7.46411Z' fill='#343A40' />
						<path d='M0.535904 10.75L4.00001 16L7.46411 10.75L0.535904 10.75Z' fill='#343A40' />
					</svg>
				)}
			</div>
		</th>
	)
}

export default TableHeader
