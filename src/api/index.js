import axios from 'axios'
import { getCookie } from 'helper/getCookies'

const mainApi = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
	withCredentials: false,
})

mainApi.interceptors.request.use(function (config) {
	const token = getCookie(process.env.REACT_APP_ACCESS_TOKEN_COOKIE_NAME)

	if (token) {
		config.headers.Authorization = `Bearer ${token}`

		return config
	}

	return config
})

export const getAuthLink = async () => {
	const { data } = await mainApi.get('/get_auth_link/')

	return data
}

export const getAccessToken = async ({ code }) => {
	const { data } = await mainApi.get(`/get_auth_token?code=${code}`)

	return data
}

export const getProfileData = async () => {
	const { data } = await mainApi.get('get_user_data')

	return data
}

export const getProjectsData = async () => {
	const { data } = await mainApi.get('get_projects_data')

	return data
}

export const logout = async () => {
	await mainApi.get('logout')
}
