import { useState } from 'react'
import styles from './App.module.sass'
import FormRegisterContainer from './components/FormRegister/FormRegisterContainer'
import Users from './components/Users/Users'
import MainPage from './components/MainPage/MainPage'

function App() {
	const [addedNewUser, setAddedNewUser] = useState(false)
	
	return (
		<div className={styles.wrapper}>
			<MainPage />
			<Users addedNewUser={addedNewUser} />
			<FormRegisterContainer
				addedNewUser={addedNewUser}
				setAddedNewUser={setAddedNewUser}
			/>
		</div>
	)
}

export default App
