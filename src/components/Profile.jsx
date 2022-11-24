import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { getProfileData, getProjectsData } from 'api'
import PersonalData from 'components/PersonalData'
import ProjectList from 'components/ProjectList'
import ProjectModal from './ProjectModal'

export default function Profile() {
	const { data: userData, isError: isErrorUser, isLoading: isLoadingUser } = useQuery('getProfile', getProfileData, { retry: 0 })
	const { data: projectsData, isError: isErrorProjects, isLoading: isLoadingProjects } = useQuery('getProjects', getProjectsData, { retry: 0 })
	const [currentProjectDialog, setCurrentProjectDialog] = useState(false)
	const [initialState, setInitialState] = useState(null)

	const currentProjectDialogOpen = (data) => {
		setInitialState(data)
		setCurrentProjectDialog(true)
	}

	const currentProjectDialogClose = () => {
		setCurrentProjectDialog(false)
		setInitialState(null)
	}

	return (
		<Box>
			{(isErrorUser || isErrorProjects) && <Typography>error</Typography>}
			{(isLoadingUser || isLoadingProjects) && <Typography>loading...</Typography>}
			{userData && projectsData && (
				<>
					<PersonalData
						login={userData.login}
						avatarUrl={userData.avatar_url}
						name={userData?.name}
						location={userData?.location}
						email={userData?.email}
						publicRepos={userData?.public_repos}
						privatRepos={projectsData?.length - userData?.public_repos}
					/>
					<ProjectList
						data={projectsData}
						selectProject={currentProjectDialogOpen}
						sx={{
							marginTop: 5,
						}}
					/>
					<ProjectModal
						open={currentProjectDialog}
						onClose={currentProjectDialogClose}
						{...initialState}
					/>
				</>
			)}
		</Box>
	)
}
