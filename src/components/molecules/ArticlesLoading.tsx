import React, { FC } from 'react'
import { Skeleton } from '@mui/material'

const ArticlesLoading: FC = ({}) => {
	const ArticleSkeleton = () => {
		return (
			<div className={'flex gap-5'}>
				<Skeleton variant='rounded' width={'350px'} height={'250px'} />
				<div className={'w-[561px] flex flex-col gap-4'}>
					<Skeleton variant='rounded' width={'80%'} height={32} />
					<div className={'flex gap-4'}>
						<Skeleton variant='rounded' width={'30%'} height={20} />
						<Skeleton variant='rounded' width={'30%'} height={20} />
					</div>
					<Skeleton variant={'rounded'} width={'100%'} height={'125px'} />
					<div className={'flex gap-4'}>
						<Skeleton variant={'rounded'} width={'40%'} height={24} />
						<Skeleton variant={'rounded'} width={'30%'} height={24} />
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className={'w-full h-full flex flex-col gap-6'}>
			<ArticleSkeleton />
			<ArticleSkeleton />
		</div>
	)
}

export default ArticlesLoading
