import { Box } from '@mui/material';
import { $FIX } from 'types/types';
import UserAvatar from './UserAvatar/UserAvatar'
import UserInfo from './UserInfo/UserInfo';

interface Props {
	imgUrl: string | null
	name: string
	location: string
	status: string | null
	isFollowed: boolean
	userId: number
	loading: boolean
	usersInFollowingProcess: number[] | []

	changeFollowing: (id: number, isFollowed: boolean) => (dispatch: $FIX) => void
}



const UserCart = (props: Props) => {
	return (
		<>
			<Box sx={{
				mt: 3,
				width: '100%',
				display: 'flex'

			}}>
				<UserAvatar
					url={props.imgUrl}
					name={props.name}
					isFollowed={props.isFollowed}
					id={props.userId}
					loading={props.loading}
					changeFollowing={props.changeFollowing}
					usersInFollowingProcess={props.usersInFollowingProcess}
				/>
				<UserInfo name={props.name} location={props.location} status={props.status} loading={props.loading} id={props.userId} />
			</Box>
		</>
	);
}

export default UserCart;

