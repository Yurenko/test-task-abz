import { FC, useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import MainTitle from '../MainTitle/MainTitle'
import PreLoader from '../PreLoader/PreLoader'
import { IUser } from './users.interface'
import styles from './Users.module.sass'
import { useUsers } from './useUsers'

const Users: FC<{ addedNewUser: boolean }> = ({ addedNewUser }) => {
	const [page, setPage] = useState(1)
	const [totalPage, setTotalPage] = useState<number | null>(null)
	const [moreUsers, setMoreUsers] = useState<IUser[]>([])

	const { isLoading, refetch } = useUsers(page, setMoreUsers, setTotalPage)

	useEffect(() => {
		setMoreUsers([])
		refetch()
	}, [addedNewUser, page])

	const handleGetUsers = () => {
		setPage((page) => page + 1)
	}
	return (
		<div className={styles.wrapperUsers}>
			<MainTitle title="Working with GET request" />
			{!isLoading ? (
				<div className={styles.userCards}>
					{moreUsers.map((item) => (
						<Cards key={item.id} {...item} />
					))}
				</div>
			) : (
				<PreLoader />
			)}
			{totalPage !== page && (
				<button onClick={handleGetUsers}>Show more</button>
			)}
		</div>
	)
}

export default Users
