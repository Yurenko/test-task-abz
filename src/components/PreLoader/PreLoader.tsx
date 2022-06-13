import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const PreLoader = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<CircularProgress />
		</Box>
	)
}

export default PreLoader
