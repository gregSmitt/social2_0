import { Box, Typography } from '@mui/material';
import UsersList from './UsersList/UsersList';
import UsersShowMoreButton from './UsersShowMoreButton/UsersShowMoreButton';
import { $FIX } from 'types/types';
import UsersPagination from './UsersPagination/UsersPagination';

interface Props {
	users: $FIX
	isNoMoreUsers: boolean
	quantityOfPages: number
	currentPage: number | null
	loading: boolean
	usersInFollowingProcess: number[] | []

	showUsers: () => void
	checkUsers: () => void
	changePage: (number: number) => void
	changeFollowing: (id: number, isFollowed: boolean) => (dispatch: $FIX) => void
}


const Users = (props: Props) => {
	return (
		<Box sx={{
			p: { xs: 2, md: 3 },
			maxWidth: 1400
		}}>
			<Typography component='h1' variant='h4'>
				Users
			</Typography>
			<UsersPagination
				quantityOfPages={props.quantityOfPages}
				changePage={props.changePage}
				currentPage={props.currentPage}
				loading={props.loading}
			/>
			<UsersList
				users={props.users}
				loading={props.loading}
				changeFollowing={props.changeFollowing}
				usersInFollowingProcess={props.usersInFollowingProcess}
			/>
			<UsersShowMoreButton
				showUsers={props.showUsers}
				checkUsers={props.checkUsers}
				isDisabled={props.isNoMoreUsers}
				loading={props.loading}
			/>
		</Box>
	);
}

export default Users;