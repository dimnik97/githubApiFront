import { useRoutes, useNavigate, useLocation } from 'react-router-dom'
import LoginPage from 'components/LoginPage'
import Profile from 'components/Profile'
import { useEffect } from 'react'
import { getProfileData } from 'api'
import { useQuery } from 'react-query'

export default function App() {
	const navigate = useNavigate()
	const location = useLocation()
	const element = useRoutes([
		{ path: '/login', element: <LoginPage /> },
		{ path: '/', element: <Profile /> },
	])
	const { data: userData, isError: isErrorUser, isLoading: isLoadingUser } = useQuery('getProfile', getProfileData, { retry: 0 })

	useEffect(() => {
		if (isErrorUser && !isLoadingUser && !location.pathname.includes('login')) {
			navigate('/login')
		}
	}, [isErrorUser, isLoadingUser, userData])

	return element
}
