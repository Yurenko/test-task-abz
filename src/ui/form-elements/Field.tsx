import { forwardRef } from 'react'

import { IField } from './form.interface'

import styles from './form.module.sass'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, helperText, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.common} style={style}>
				<input ref={ref} type={type} placeholder={placeholder} {...rest} />
				<label className={styles.field}>{placeholder}</label>
				<div className={styles.helperText}>{helperText}</div>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
