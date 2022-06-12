import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const PreLoader = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>
	)
}

export default PreLoader
