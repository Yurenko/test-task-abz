import { SetStateAction } from 'react'
import { useQuery } from 'react-query'
import { UserService } from '../../services/user/user.service'

export const useUsers = (
	page: number,
	setMoreUsers: {
		(value: SetStateAction<any[]>): void
		(arg0: (prev: any) => any[]): void
	},
	setTotalPage: {
		(value: SetStateAction<number | null>): void
		(arg0: number): void
	}
) => {
	const { isLoading, refetch } = useQuery(
		'users',
		() => UserService.getUsers(page),
		{
			onSuccess: ({ data }) => {
				setMoreUsers((prev) => [...prev, ...data.users])
				setTotalPage(data.total_pages)
			},
			onError(error) {
				alert(error)
			},
		}
	)
	return { isLoading, refetch }
}
