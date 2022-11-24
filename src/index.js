import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from 'components/Layout'
const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
})
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router>
				<Layout>
					<App />
				</Layout>
			</Router>
		</QueryClientProvider>
	</React.StrictMode>
)
