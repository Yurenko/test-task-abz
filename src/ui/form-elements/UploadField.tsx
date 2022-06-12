import { ChangeEvent, forwardRef, useState } from 'react'
import { IUploadField } from './form.interface'
import styles from './form.module.sass'

const UploadField = forwardRef<HTMLInputElement, IUploadField>(
	({ placeholder, error, type, accept, onChange, setBtnDisabled }, ref) => {
		const [valueImage, setValueImage] = useState('Upload your photo')
		const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files
			if (files?.length) {
				onChange(files[0])
				setValueImage(files[0].name)
				setBtnDisabled(false)
			}
		}

		return (
			<div className={styles.upload}>
				<label>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						onChange={handleChange}
						accept={accept}
					/>
					<span>{valueImage}</span>
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
			</div>
		)
	}
)

export default UploadField
