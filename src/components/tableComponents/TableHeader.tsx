import React, { FC } from 'react'

interface ITableHeaderProps {
	title: string
	sortButtons?: boolean
	filterHandle?: (target: string) => void
}

const TableHeader: FC<ITableHeaderProps> = ({ title, sortButtons, filterHandle }) => {
	return (
		<th>
			<div className={'flex items-center gap-2 justify-start'}>
				<span>{title}</span>
				{sortButtons && (
					<svg
						className={'hover: cursor-pointer'}
						onClick={() => {
							if (filterHandle) filterHandle(title)
						}}
						width='8'
						height='16'
						viewBox='0 0 8 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M7.46411 5.25L4.00001 0L0.535904 5.25H7.46411Z' fill='#343A40' />
						<path d='M0.535904 10.75L4.00001 16L7.46411 10.75L0.535904 10.75Z' fill='#343A40' />
					</svg>
				)}
			</div>
		</th>
	)
}

export default TableHeader
