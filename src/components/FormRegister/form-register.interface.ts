export interface IFormEditInput {
	name: string
	email: string
	phone: string
	position_id: number | null
	photo: object
}

export interface IInitialState {
	user: IFormEditInput | null
	isLoading: boolean
}

export interface IFormResponce {
	success: true
	userId: number
	message: string
}

export interface IPositions {
	id: number
	name: string
}

export interface IResponce {
	success: boolean
	positions: IPositions[]
}

export interface IToken {
	success: boolean
	token: string
}
