import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getArticles } from '../../app/actionCreators'

import { IArticle } from '../../models'

interface ArticlesState {
	articles: IArticle[] | null
	inPending: boolean
	articlesRejected: boolean
}

const initialState: ArticlesState = {
	articles: null,
	inPending: false,
	articlesRejected: false
}

const articleSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		filterArticles: (state, action: PayloadAction<{ target: string; isAscending: boolean }>) => {
			if (state.articles) {
				switch (action.payload.target) {
					case 'Title':
						action.payload.isAscending
							? (state.articles = state.articles.sort((a, b) =>
									a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
							  ))
							: (state.articles = state.articles.sort((a, b) =>
									a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
							  ))
						break
					case 'Perex':
						action.payload.isAscending
							? (state.articles = state.articles.sort((a, b) =>
									a.perex.toLowerCase() > b.perex.toLowerCase() ? 1 : -1
							  ))
							: (state.articles = state.articles.sort((a, b) =>
									a.perex.toLowerCase() > b.perex.toLowerCase() ? -1 : 1
							  ))
						break
					case 'Author':
						action.payload.isAscending
							? (state.articles = state.articles.sort((a, b) =>
									a.author.toLowerCase() > b.author.toLowerCase() ? 1 : -1
							  ))
							: (state.articles = state.articles.sort((a, b) =>
									a.author.toLowerCase() > b.author.toLowerCase() ? -1 : 1
							  ))
						break
					case 'Comments':
						action.payload.isAscending
							? (state.articles = state.articles.sort((a, b) => (a.comments > b.comments ? 1 : -1)))
							: (state.articles = state.articles.sort((a, b) => (a.comments > b.comments ? -1 : 1)))
						break
					default:
						break
				}
			}
		}
	},
	extraReducers: {
		[getArticles.pending.type]: (state) => {
			state.inPending = true
			state.articles = null
		},
		[getArticles.fulfilled.type]: (state, action: PayloadAction<IArticle[]>) => {
			state.articles = action.payload
			state.inPending = false
			state.articlesRejected = false
		},
		[getArticles.rejected.type]: (state, action: PayloadAction<string>) => {
			state.articlesRejected = true
			state.inPending = false
		}
	}
})

export default articleSlice.reducer
export const { filterArticles } = articleSlice.actions
