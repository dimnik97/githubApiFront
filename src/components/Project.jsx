import { Box } from '@mui/material'
import { useQuery } from 'react-query'
import { getProject } from 'api'
import { useParams, useLocation } from 'react-router-dom'
import { useMemo } from 'react'

export default function Project() {
	const { projectId } = useParams()
	const location = useLocation()
	console.log(projectId)
	const params = useMemo(() => {
		const owner = new URLSearchParams(location.search).get('owner')

		if (owner && projectId) {
			return {
				owner,
				project: projectId,
			}
		}
	}, [location, projectId])
	const {
		data: projectData,
		isError: isErrorProject,
		isLoading: isLoadingProject,
	} = useQuery(['getProject', params], () => getProject(params), { retry: 0, enabled: !!params })
	console.log(projectData, isErrorProject, isLoadingProject)

	return <Box></Box>
}
