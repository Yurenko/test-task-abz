import { FC } from 'react'
import styles from './Cards.module.sass'
import icon from '../../assets/photo-cover.svg'
import CustomizedTooltips from '../Toolkit/Toolkit'
import { IUser } from '../Users/users.interface'

const Cards: FC<IUser> = ({ email, name, phone, photo, position }, ...rest) => {
	return (
		<div className={styles.wrapper}>
			<img src={photo ? photo : icon} alt={photo} className={styles.icon} />
			<div className={styles.name}>{name}</div>
			<div>
				<div>{position}</div>
				<CustomizedTooltips title={email} />
				<div>{phone}</div>
			</div>
		</div>
	)
}

export default Cards
