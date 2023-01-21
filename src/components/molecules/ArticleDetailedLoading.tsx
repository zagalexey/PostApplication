import React, { FC } from 'react'

import { Skeleton } from '@mui/material'

const ArticleDetailedLoading: FC = () => {
	return (
		<div className={'w-[760px] h-full flex flex-col'}>
			<Skeleton className={'mb-[22px]'} variant='rounded' width={300} height={32} />
			<Skeleton className={'mb-[22px]'} variant='rounded' width={220} height={24} />
			<Skeleton variant='rounded' width={'100%'} height={504} />
		</div>
	)
}

export default ArticleDetailedLoading
