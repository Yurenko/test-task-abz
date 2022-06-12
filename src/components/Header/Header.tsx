import { FC } from 'react'
import styles from './Header.module.sass'
import logo from '../../assets/Logo.svg'

const Header: FC = () => {
	return (
		<header className={styles.wrapperHeader}>
			<div className={styles.content}>
				<a href="/" className={styles.headerLogo}>
					<img src={logo} alt="Logo" />
				</a>
				<div className={styles.btn}>
					<a href="/users">
						<button type="button">Users</button>
					</a>
					<a href="/sing-up">
						<button type="button">Sing up</button>
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header
