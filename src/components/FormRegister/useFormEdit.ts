import { UserService } from '../../services/user/user.service'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { IFormEditInput, IPositions } from './form-register.interface'
import { AuthService } from '../../services/auth/auth.service'
import Cookies from 'js-cookie'
import { errorCatch } from '../../api/api.helpers'

export const useFormEdit = (setAddedNewUser: any) => {
	const { isLoading, data: positions } = useQuery(
		'positions',
		() => UserService.getPositions(),
		{
			select: ({ data }): IPositions[] => data.positions,
		}
	)

	const { mutateAsync } = useMutation(
		'form for register',
		(data: IFormEditInput) =>
			UserService.register(
				data.name,
				data.email,
				data.phone,
				data.position_id,
				data.photo
			),
		{
			onError(error) {
				alert(errorCatch(error))
			},
		}
	)

	const onSubmit: SubmitHandler<IFormEditInput> = async (data) => {
		try {
			const accessToken = await AuthService.token()
			Cookies.set('accessToken', accessToken.data.token)
			await mutateAsync(data)
			setAddedNewUser(true)
		} catch (error) {
			alert(errorCatch(error))
		}
	}

	return { isLoading, positions, onSubmit }
}
