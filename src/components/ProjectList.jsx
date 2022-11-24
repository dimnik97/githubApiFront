import { List, ListItem, Card, CardContent, Typography } from '@mui/material'
import { format } from 'date-fns'

export default function ProjectList({ data, selectProject, ...props }) {
	return (
		<List
			spacing={3}
			{...props}
		>
			{data.map(({ id, name, owner, description, html_url: htmlUrl, language, watchers_count: watchersCount, created_at: createdAt }) => (
				<ListItem key={id}>
					<Card
						sx={{ cursor: 'pointer', width: '100%' }}
						onClick={() =>
							selectProject({
								name,
								description,
								url: htmlUrl,
								followers: watchersCount,
								language,
							})
						}
					>
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom
							>
								Author: {owner.login}
							</Typography>
							<Typography variant="h5">{name}</Typography>
							<Typography
								sx={{
									color: '#a8a8a8',
								}}
							>
								Data of created: {format(new Date(createdAt), 'dd-MM-yyyy')}
							</Typography>
						</CardContent>
					</Card>
				</ListItem>
			))}
		</List>
	)
}
