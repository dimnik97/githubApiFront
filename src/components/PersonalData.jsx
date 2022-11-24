import { Box, Avatar, List, ListItem, ListItemText, Divider, Typography } from '@mui/material'

export default function PersonalData({ login, avatarUrl, name, location, email, publicRepos, privatRepos }) {
	const data = [
		{ primary: 'Name', secondary: name },
		{ primary: 'Location', secondary: location },
		{ primary: 'Email', secondary: email },
		{ primary: 'Public Repos', secondary: publicRepos },
		{ primary: 'Participate Repos', secondary: privatRepos },
	]

	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Avatar
					alt={login}
					src={avatarUrl}
					sx={{ width: 250, height: 250 }}
				/>
				<Typography
					sx={{
						marginTop: 3,
						color: '#a8a8a8',
						fontSize: 18,
						fontWeight: 500,
					}}
				>
					{login}
				</Typography>
			</Box>

			<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
			>
				{data.map(({ primary, secondary }, idx) => (
					<ListItem
						key={idx}
						sx={{
							display: 'block',
							padding: 0,
						}}
					>
						<ListItemText
							primary={primary}
							secondary={secondary || '–'}
						/>
						<Divider />
					</ListItem>
				))}
			</List>
		</Box>
	)
}
