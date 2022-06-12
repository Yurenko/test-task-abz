import { FC } from 'react'
import SuccessfullyRegistred from '../Users/SuccessfullyRegistred'
import FormRegister from './FormRegister'

const FormRegisterContainer: FC<{
	addedNewUser: boolean
	setAddedNewUser: any
}> = ({ setAddedNewUser, addedNewUser }) => {
	return addedNewUser ? (
		<SuccessfullyRegistred />
	) : (
		<FormRegister setAddedNewUser={setAddedNewUser} />
	)
}

export default FormRegisterContainer
