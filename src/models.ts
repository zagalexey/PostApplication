export interface Articles {
	pagination: Pagination
	items: IArticle[]
}

export interface Pagination {
	offset: number
	limit: number
	total: number
}

export interface IArticle {
	articleId: string
	title: string
	perex: string
	imageId: string
	createdAt: string
	lastUpdatedAt: string
}
