import { createSlice } from '@reduxjs/toolkit'

interface LoginSlice {
	username: string
	password: string
	isLoggedIn: boolean
	avatar: string
}

const initialState: LoginSlice = {
	username: 'admin',
	password: 'admin',
	isLoggedIn: false,
	avatar: require('../../images/avatars/Avatar.png')
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		login(state) {
			state.isLoggedIn = true
		},
		logout(state) {
			state.isLoggedIn = false
		}
	}
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
