export interface IComment {
	id?: string
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
	imageUrl: string
	createdAt: string
	lastUpdatedAt: string
	content: string
	author: string
	comments: Array<IComment>
}

export interface commentArgs {
	articleId: number
	content: string
	author: string
}
