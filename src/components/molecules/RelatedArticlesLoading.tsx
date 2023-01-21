import React, { FC } from 'react'

import { Skeleton } from '@mui/material'

const RelatedArticlesLoading: FC = () => {
	return (
		<>
			<div className={'mb-8'}>
				<Skeleton className={'mb-[8px]'} variant='rounded' width={'100%'} height={32} />
				<Skeleton className={'mb-[5px]'} variant='rounded' width={'100%'} height={24} />
				<Skeleton className={'mb-[5px]'} variant='rounded' width={'100%'} height={24} />
				<Skeleton variant='rounded' width={'100%'} height={24} />
			</div>
			<div>
				<Skeleton className={'mb-[8px]'} variant='rounded' width={'100%'} height={32} />
				<Skeleton className={'mb-[5px]'} variant='rounded' width={'100%'} height={24} />
				<Skeleton className={'mb-[5px]'} variant='rounded' width={'100%'} height={24} />
				<Skeleton variant='rounded' width={'100%'} height={24} />
			</div>
		</>
	)
}

export default RelatedArticlesLoading
