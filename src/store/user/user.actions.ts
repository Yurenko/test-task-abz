import { createAsyncThunk } from '@reduxjs/toolkit'
import { IFormEditInput } from '../../components/FormRegister/form-register.interface'
import { UserService } from '../../services/user/user.service'

export const register = createAsyncThunk<IFormEditInput, IFormEditInput>(
	'users',
	async ({ name, email, phone, position_id, photo }, thunkApi) => {
		try {
			const response = await UserService.register(
				name,
				email,
				phone,
				position_id,
				photo
			)
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
