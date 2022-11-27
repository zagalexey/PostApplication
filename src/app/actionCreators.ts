import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { appLiftingAxiosProtected } from './axiosConfig'
import { Articles } from '../models'

export const API_KEY = 'cb5cd73f-b4ac-492c-a172-df3716d38923'
const token = '3dd20ed9-6fa7-448c-8234-131cc2e26ac5'

// axios.defaults.headers.get['Authorization'] = token
axios.defaults.headers.get['X-API-KEY'] = API_KEY
// axios.defaults.headers.post['Authorization'] = token
// axios.defaults.headers.post['X-API-KEY'] = API_KEY

// const config = {
// 	headers: {
// 		'X-API-KEY': API_KEY
// 	}
// }

export const getPosts = createAsyncThunk('posts/getPosts', async (_, thunkAPI) => {
	try {
		const response = await axios.get<Articles>('https://fullstack.exercise.applifting.cz/articles')
		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e)
	}
})

export const postComment = createAsyncThunk('comments/postComment', async (_, thunkAPI) => {
	const data = {
		articleId: '1e7589ee-7d99-4e1c-8bcf-1f2ee790e075',
		author: 'alexey',
		content: 'Some comment'
	}

	try {
		const response = await appLiftingAxiosProtected.post<any>('/comments', data, {
			headers: {
				'X-API-KEY': API_KEY,
				Authorization: token
			},
			data: {
				...data
			}
		})
		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e)
	}
})
