import { Container, AppBar, IconButton, Tooltip, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { useLocation, useNavigate } from 'react-router-dom'

const pages = [
	{ value: '/login', label: 'Authorisation' },
	{ value: '/', label: 'Profile' },
]

export default function Layout({ children }) {
	const location = useLocation()
	const navigate = useNavigate()

	const onLogout = () => {
		navigate('/login')
	}

	return (
		<Container
			maxWidth="md"
			sx={{
				marginTop: 15,
			}}
		>
			<AppBar
				position="fixed"
				sx={{
					padding: 2,
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Typography variant="h5">{pages.find(({ value }) => location.pathname.includes(value))?.label || '–'}</Typography>
				{!location.pathname.includes('login') && (
					<Tooltip title="Logout">
						<IconButton onClick={onLogout}>
							<LogoutIcon style={{ color: 'white' }} />
						</IconButton>
					</Tooltip>
				)}
			</AppBar>
			{children}
		</Container>
	)
}
