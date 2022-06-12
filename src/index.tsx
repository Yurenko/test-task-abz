import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@mui/material'
import { theme } from './utils/MaterialUI/Theme'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={theme}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ThemeProvider>
	</QueryClientProvider>
)
