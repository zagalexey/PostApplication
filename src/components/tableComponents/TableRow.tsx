import React from 'react'

interface ITableRowProps {}

const TableRow: React.FunctionComponent<ITableRowProps> = ({}) => {
	return (
		<tr className={'h-[48px] border-b'}>
			<td>Why Do Cats Have Whiskers</td>
			<td>A cat's whiskers — or vibrissae — are a well-honed sen...</td>
			<td>Elisabeth Strain</td>
			<td className={'text-start'}>4</td>
			<td>
				<div className={'w-full h-full flex justify-start items-center gap-2'}>
					<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='24' height='24' viewBox='0 0 24 24'>
						<path d='M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z'></path>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='24' height='24' viewBox='0 0 30 30'>
						<path d='M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z'></path>
					</svg>
				</div>
			</td>
		</tr>
	)
}

export default TableRow
