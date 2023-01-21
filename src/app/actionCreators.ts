import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { commentArgs, IArticle, IComment } from '../models'

export const getArticles = createAsyncThunk('articles/getArticles', async (_, thunkAPI) => {
	try {
		const response = await axios.get<IArticle[]>('http://localhost:3000/articles?_embed=comments')
		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e)
	}
})

export const postComment = createAsyncThunk(
	'comments/postComment',
	async (commentArgs: commentArgs, thunkAPI) => {
		const data: IComment = {
			articleId: commentArgs.articleId,
			author: 'Elisabeth Strain',
			content: commentArgs.content,
			postedAt: new Date().toISOString(),
			image: 'Avatar.png',
			score: 0
		}

		try {
			const response = await axios.post<IComment>('http://localhost:3000/comments', data, {
				data: data
			})
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const deleteArticle = createAsyncThunk(
	'articles/deleteArticle',
	(articleId: number, thunkAPI) => {
		try {
			axios.delete(`http://localhost:3000/articles/${articleId}`)
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
)
