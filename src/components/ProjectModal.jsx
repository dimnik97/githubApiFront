import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Link, Box } from '@mui/material'

export default function ProjectModal({ name, description, url, followers, language, onClose, ...props }) {
	return (
		<Dialog
			sx={{
				'& .MuiPaper-root': {
					minWidth: '800px',
				},
			}}
			onClose={onClose}
			{...props}
		>
			<DialogTitle>
				Project:{' '}
				<Typography
					sx={{
						fontSize: 22,
						fontWeight: 800,
					}}
					component="b"
				>
					{name}
				</Typography>
			</DialogTitle>
			<DialogContent>
				<Typography>Description: {description || '–'}</Typography>
				<Typography>Language: {language || '–'}</Typography>
				<Typography>Followers count: {followers || '0'}</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<Typography>URL:</Typography>
					{url ? (
						<Link
							sx={{
								marginLeft: 1,
								fontSize: 18,
							}}
							href={url}
						>
							{url}
						</Link>
					) : (
						'–'
					)}
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Close</Button>
			</DialogActions>
		</Dialog>
	)
}
