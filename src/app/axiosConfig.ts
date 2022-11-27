import axios from 'axios'

// PWD Applifting123
export const BASE_API_URL = 'https://fullstack.exercise.applifting.cz'
// export const API_KEY = 'cb5cd73f-b4ac-492c-a172-df3716d38923'

// export enum USER_CONFIG {
//    TENANT_ID = "1e5cfa30-c38b-44c5-87ae-558f7dee6146",
//    CREATED_AT = "2022-10-18T16:12:22.6780557Z",
//    LAST_USED_AT = "",
//    NAME = "contact@pavel-vondra.com",
// }

export const appLiftingAxios = axios.create({
	baseURL: BASE_API_URL,
	headers: {
		// 'X-API-KEY': API_KEY,
		'Content-type': 'application/json'
	}
})

export const appLiftingAxiosProtected = axios.create({
	baseURL: BASE_API_URL,
	headers: {
		// 'X-API-KEY': API_KEY
	}
})
