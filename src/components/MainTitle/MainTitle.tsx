import { FC } from 'react'
import styles from './MainTitle.module.sass'

const MainTitle: FC<{ title: string }> = ({ title }) => {
	return <h1 className={styles.title}>{title}</h1>
}

export default MainTitle
