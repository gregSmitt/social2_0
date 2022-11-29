import { Box, Typography, } from "@mui/material";
import { Navigate } from "react-router-dom";
import { authDataType } from "types/types";
import LoginForm from "./LoginForm/LoginForm";
import { $FIX } from 'types/types';
import { FC } from "react";


interface Props {
	isLogined: boolean
	loading: boolean
	loginedUserData: authDataType
	logIn: $FIX
}


const Login: FC<Props> = (props: Props) => {
	if (props.isLogined && props.loginedUserData) {
		return <Navigate to={`/profile/${props.loginedUserData.id}`} />
	} else {
		return (
			<Box sx={{
				display: 'flex', flexDirection: 'column', alignItems: 'center',
				p: { xs: 2, md: 3 },
				pt: { xs: 2, md: 10 },
				maxWidth: 1400
			}}>
				<Typography component='h1' variant='h4' sx={{ textAlign: 'center' }}>
					Login
				</Typography>
				<LoginForm loading={props.loading} logIn={props.logIn} />
			</Box>
		);
	}
}

export default Login;