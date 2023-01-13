import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { commentArgs, IArticle, IComment } from '../models'

// export const API_KEY = 'cb5cd73f-b4ac-492c-a172-df3716d38923'
// const token = '3dd20ed9-6fa7-448c-8234-131cc2e26ac5'

export const getPosts = createAsyncThunk('posts/getPosts', async (_, thunkAPI) => {
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
			author: 'Alexey Zagorulko',
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
