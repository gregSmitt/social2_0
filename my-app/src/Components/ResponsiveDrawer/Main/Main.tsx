import { Box, Toolbar } from '@mui/material';
import { Routes, Route } from "react-router-dom";
// import DialogsContainer from './Dialogs/DialogsContainer';
// import UsersContainer from './Users/UsersContainer';
// import ProfileContainer from './Profile/ProfileContainer';
// import LoginContainer from './Login/LoginContainer';
import SnackContainer from './Snack/SnackContainer';
import React, { FC, Suspense } from 'react';
import NotFound from './Users/NotFound/NotFound';
import Preloader from 'Components/Cmmon/Preloader/Preloader';
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const LoginContainer = React.lazy(() => import('./Login/LoginContainer'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));


interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	drawerWidth: number
	usersListWidth: number
}



const Main: FC<Props> = (props: Props) => {
	const dialogs = <DialogsContainer />
	return (
		<>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					width: { sm: `calc(100% - ${props.drawerWidth}px)` },
					display: 'flex',
					flexDirection: 'column',
					height: '100vh',
					position: 'relative'
				}}
			>
				<Toolbar />
				<Suspense fallback={<Preloader />}>
					<Routes>
						<Route index element={<LoginContainer />} />
						<Route path="profile/" element={<LoginContainer />} />
						<Route path="profile/:id" element={<ProfileContainer />} />
						<Route path="messages" element={dialogs} /> {/* Добавить страницу выбора диалога или сделать редирект на первый диалог в очереди*/}
						<Route path="messages/:id" element={dialogs} />
						<Route path="users/:pageNumber" element={<UsersContainer />} />
						<Route path="users/" element={<UsersContainer />} />
						<Route path="login/" element={<LoginContainer />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
				<SnackContainer />
			</Box>
		</>
	);
}

export default Main;

