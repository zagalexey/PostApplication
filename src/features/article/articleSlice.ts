import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPosts } from '../../app/actionCreators'
import { Articles } from '../../models'

interface ArticlesState {
	articles: Articles
	inPending: boolean
	articlesRejected: boolean
}

const initialState: ArticlesState = {
	articles: {
		pagination: {
			offset: 0,
			limit: 0,
			total: 0
		},
		items: []
	},
	inPending: false,
	articlesRejected: false
}

const articleSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {},
	extraReducers: {
		[getPosts.pending.type]: (state) => {
			state.inPending = true
			state.articles = {
				pagination: {
					limit: 0,
					total: 0,
					offset: 0
				},
				items: []
			}
		},
		[getPosts.fulfilled.type]: (state, action: PayloadAction<Articles>) => {
			state.articles = action.payload
			state.inPending = false
			state.articlesRejected = false
		},
		[getPosts.rejected.type]: (state, action: PayloadAction<string>) => {
			state.articlesRejected = true
			state.inPending = false
		}
	}
})

export default articleSlice.reducer
