import { lazy, Suspense, useState } from 'react'
import styles from './App.module.sass'
import PreLoader from './components/PreLoader/PreLoader'

const MainPage = lazy(() => import('./components/MainPage/MainPage'))
const Users = lazy(() => import('./components/Users/Users'))
const FormRegisterContainer = lazy(
	() => import('./components/FormRegister/FormRegisterContainer')
)

function App() {
	const [addedNewUser, setAddedNewUser] = useState(false)

	return (
		<div className={styles.wrapper}>
			<Suspense fallback={<PreLoader />}>
				<MainPage />
				<Users addedNewUser={addedNewUser} />
				<FormRegisterContainer
					addedNewUser={addedNewUser}
					setAddedNewUser={setAddedNewUser}
				/>
			</Suspense>
		</div>
	)
}

export default App
