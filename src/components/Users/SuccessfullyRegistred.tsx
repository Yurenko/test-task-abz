import { FC } from 'react'
import MainTitle from '../MainTitle/MainTitle'
import SuccessImage from '../../assets/success-image.svg'
import styles from './../../ui/form-elements/form.module.sass'

const SuccessfullyRegistred: FC = () => {
	return (
		<div className={styles.wrapper}>
			<MainTitle title="User successfully registered" />
			<img src={SuccessImage} alt="success image" />
		</div>
	)
}

export default SuccessfullyRegistred
