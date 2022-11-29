import { Box, FormControlLabel, TextField, Checkbox } from "@mui/material";
import SendFormButton from "./SendFormButton/SendFormButton";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { loginValidation, passwordValidation } from './validation';
import { $FIX } from 'types/types';

interface Props {
	loading: boolean
	logIn: (email: string, password: string, rememberMe: boolean) => (dispatch: $FIX) => void
}
type Inputs = {
	login: string
	password: string
	isRemember: boolean
};

const LoginForm = (props: Props) => {
	const inputStyles = { mt: 2, width: '100%' }

	const { handleSubmit, control, formState: { errors }, reset } = useForm<Inputs>({
		mode: 'onBlur',
		defaultValues: {
			login: '',
			password: '',
			isRemember: false
		}
	});
	const onSubmit: SubmitHandler<Inputs> = data => {
		props.logIn(data.login, data.password, data.isRemember);
		reset();
	}

	return (
		<Box component={'form'} onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: '500px', width: '100%' }}>
			<Controller
				control={control}
				name="login"
				rules={loginValidation}
				render={({ field }) => (
					<TextField
						error={(errors.login) ? true : false}
						label="Email"
						variant="outlined"
						helperText={errors.login?.message}
						{...field}
						sx={inputStyles} />
				)}
			/>
			<Controller
				control={control}
				name="password"
				rules={passwordValidation}
				render={({ field }) => (
					<TextField
						error={(errors.password) ? true : false}
						label="Password"
						variant="outlined"
						helperText={errors.password?.message}
						{...field}
						sx={inputStyles} />
				)}
			/>
			<Controller
				control={control}
				name="isRemember"
				render={({ field }) => (
					// <Checkbox {...field} />
					<FormControlLabel
						control={<Checkbox {...field} checked={field.value} />}
						label='Remember me'
						sx={{ mt: 1, ml: 2 }} />
				)}
			/>

			<SendFormButton loading={props.loading} />
		</Box>
	);
}

export default LoginForm;
