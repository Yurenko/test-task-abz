import { createSlice } from '@reduxjs/toolkit'
import {
	IFormEditInput,
} from '../../components/FormRegister/form-register.interface'

import { register } from './user.actions'

const initialState: IFormEditInput = {
	name: '',
	email: '',
	phone: '',
	position_id: null,
	photo: {},
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder

			.addCase(register.fulfilled, (state, { payload }) => {
				state.email = payload.email
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.name = payload.name
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.phone = payload.phone
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.photo = payload.photo
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.position_id = payload.position_id
			})
	},
})

export const { reducer } = userSlice
