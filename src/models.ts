// export interface Articles {
// 	pagination: Pagination
// 	items: IArticle[]
// }
//
// export interface Pagination {
// 	offset: number
// 	limit: number
// 	total: number
// }

export interface commentArgs {
	articleId: number
	author: string
	content: string
}

export interface IComment {
	commentId?: string
	articleId: number
	author: string
	content: string
	postedAt: string
	image: string
	score: number
}

export interface IArticle {
	id: number
	title: string
	perex: string
	imageId: null | string
	createdAt: string
	lastUpdatedAt: string
	content: string
	comments: Array<IComment>
}
