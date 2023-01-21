import { configureStore } from '@reduxjs/toolkit'

import loginReducer from '../features/login/loginSlice'
import articleReducer from '../features/article/articleSlice'

export const store = configureStore({
	reducer: {
		login: loginReducer,
		articles: articleReducer
	}
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
