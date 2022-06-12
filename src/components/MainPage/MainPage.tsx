import { FC } from 'react'
import Header from '../Header/Header'
import styles from './MainPage.module.sass'

const MainPage: FC = () => {
	return (
		<div>
			<Header />
			<div className={styles.mainSection}>
				<div className={styles.information}>
					<h1 className={styles.title}>
						Test assignment for front-end developer
					</h1>
					<p className={styles.text}>
						What defines a good front-end developer is one that has skilled
						knowledge of HTML, CSS, JS with a vast understanding of User design
						thinking as they'll be building web interfaces with accessibility in
						mind. They should also be excited to learn, as the world of
						Front-End Development keeps evolving.
					</p>
					<button className={styles.button}>Sing up</button>
				</div>
			</div>
		</div>
	)
}

export default MainPage
