import instance from '../../api/interceptors'
import { IToken } from '../../components/FormRegister/form-register.interface'
import { getToken } from '../../configs/api.config'

export const AuthService = {
	async token() {
		return instance.get<IToken>(getToken())
	},
}
