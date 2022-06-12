export interface IUser {
	id: string
	name: string
	email: string
	phone: string
	position: string
	position_id: string
	registration_timestamp: number
	photo: string
}

export interface IResponceUsers {
	success: boolean
	total_pages: number
	users: IUser[]
}
