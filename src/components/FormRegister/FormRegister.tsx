import { FC, useState } from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import Field from '../../ui/form-elements/Field'
import MainTitle from '../MainTitle/MainTitle'
import { IFormEditInput } from './form-register.interface'
import UploadField from '../../ui/form-elements/UploadField'
import { useFormEdit } from './useFormEdit'
import styles from '../../ui/form-elements/form.module.sass'
import PreLoader from '../PreLoader/PreLoader'

const defaultValues = {
	name: '',
	email: '',
	phone: '',
	position_id: null,
	photo: {},
}

const FormRegister: FC<{ setAddedNewUser: any }> = ({ setAddedNewUser }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
	} = useForm<IFormEditInput>({
		defaultValues,
		mode: 'onChange',
	})

	const { isLoading, positions, onSubmit } = useFormEdit(setAddedNewUser)
	const [btnDisabled, setBtnDisabled] = useState(true)

	return (
		<div className={styles.wrapper}>
			<MainTitle title="Working with POST request" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					{...register('name', {
						required: 'Name is required!',
					})}
					minLength={2}
					maxLength={60}
					placeholder="Your Name"
					helperText=""
					error={errors.name}
				/>
				<Field
					{...register('email', {
						required: 'Email is required!',
					})}
					type="email"
					placeholder="Email"
					helperText=""
					error={errors.email}
				/>
				<Field
					{...register('phone', {
						required: 'Phone is required!',
						pattern: /^[\+]{0,1}380([0-9]{9})$/,
					})}
					type="tel"
					placeholder="Phone"
					helperText="+38 (XXX) XXX - XX - XX"
					error={errors.phone}
				/>
				<div className={styles.position}>
					<label>Select your position</label>
					{!isLoading ? (
						<Controller
							render={({ field }) => (
								<RadioGroup {...field}>
									{positions &&
										positions.map((item) => (
											<FormControlLabel
												key={item.id}
												value={item.id}
												control={<Radio className={styles.btn} />}
												label={item.name}
											/>
										))}
								</RadioGroup>
							)}
							name="position_id"
							control={control}
							rules={{
								required: 'Position is required!',
							}}
						/>
					) : (
						<PreLoader />
					)}
				</div>

				<Controller
					name="photo"
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							{...register('photo')}
							type="file"
							placeholder="Photo"
							error={error}
							accept="image/jpg, image/jpeg"
							image={value}
							onChange={onChange}
							setBtnDisabled={setBtnDisabled}
						/>
					)}
					rules={{
						required: 'Photo is required!',
					}}
				/>

				<button disabled={btnDisabled}>Sign up</button>
			</form>
		</div>
	)
}

export default FormRegister
