export const API_URL = `${process.env.APP_URL}/api`

export const postUsersUrl = () => `/users`
export const getUsersUrl = (page: number = 1) => `/users?page=${page}&count=6`
export const getPositionsUrl = () => `/positions`
export const getToken = () => '/token'
