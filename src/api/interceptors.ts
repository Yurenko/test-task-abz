import axios from 'axios'
import Cookies from 'js-cookie'

const { REACT_APP_URL } = process.env
const instance = axios.create({
	baseURL: `${REACT_APP_URL}`,
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')
	if (config.headers && accessToken) config.headers.Token = `${accessToken}`

	return config
})

export default instance
