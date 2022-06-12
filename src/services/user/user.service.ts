import { IFormEditInput } from './../../components/FormRegister/form-register.interface'
import { IResponce } from '../../components/FormRegister/form-register.interface'
import {
	getPositionsUrl,
	getUsersUrl,
	postUsersUrl,
} from '../../configs/api.config'
import instance from '../../api/interceptors'
import { IResponceUsers } from '../../components/Users/users.interface'

export const UserService = {
	async register(
		name: string,
		email: string,
		phone: string,
		position_id: number | null,
		photo: object
	) {
		const response = await instance.post<IFormEditInput>(
			postUsersUrl(),
			{ name, email, phone, position_id, photo },
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		)
		return response
	},

	async getPositions() {
		return instance.get<IResponce>(getPositionsUrl())
	},

	async getUsers(page: number = 1) {
		return instance.get<IResponceUsers>(getUsersUrl(page))
	},
}
