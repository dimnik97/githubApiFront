import { Box, Link, Button, Avatar } from '@mui/material'
import { getAuthLink, getAccessToken, logout } from 'api'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { useQuery } from 'react-query'
import Cookies from 'universal-cookie'

export default function LoginPage() {
	const cookies = new Cookies()
	const location = useLocation()
	const navigate = useNavigate()
	const code = useMemo(() => new URLSearchParams(location.search).get('code'), [location])
	const { data: auth, isError: isErrorAtuh, isLoading: isLoadingAuth } = useQuery('getAuthLink', getAuthLink, { retry: 0, enabled: !code })
	const { data: token, isError: isErrorToken, isLoading: isLoadingToken } = useQuery(['getAccessToken', { code }], () => getAccessToken({ code }), { retry: 0, enabled: !!code })

	useEffect(() => {
		if (token?.access_token) {
			cookies.set(process.env.REACT_APP_ACCESS_TOKEN_COOKIE_NAME, token?.access_token, {
				path: '/',
			})
			navigate('/')
		}
	}, [token])

	useEffect(() => {
		logout()
		cookies.remove(process.env.REACT_APP_ACCESS_TOKEN_COOKIE_NAME)
	}, [])

	return (
		<Box
			sx={{
				margin: '0 auto',
				display: 'flex',
				height: '400px',
				width: '400px',
				backgroundColor: '#ededed',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '8px',
			}}
		>
			<Button
				component={Link}
				href={auth?.api_link}
				variant="contained"
				color="primary"
				disabled={isErrorAtuh || isErrorToken || isLoadingAuth || isLoadingToken}
				startIcon={
					<Avatar
						src="/images/logo-github.png"
						sx={{
							width: '35px',
							height: '35px',
						}}
						alt="github"
					/>
				}
			>
				Sing Up with GitHub
			</Button>
		</Box>
	)
}
