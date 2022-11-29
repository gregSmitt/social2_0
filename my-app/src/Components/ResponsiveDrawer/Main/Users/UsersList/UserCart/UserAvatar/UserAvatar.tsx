import { Box, Avatar, Button } from '@mui/material';
import CustomSceleton from 'Components/Cmmon/CustomSkeleton';
import { profileAPI } from 'api/api';
import { $FIX } from 'types/types';




interface Props {
	url: string | null
	name: string
	isFollowed: boolean
	id: number
	loading: boolean
	usersInFollowingProcess: number[] | []

	changeFollowing: (id: number, isFollowed: boolean) => (dispatch: $FIX) => void
}



const UserAvatar = (props: Props) => {

	const color: "inherit" | "primary" | "success" | "secondary" | "error" | "info" | "warning" | undefined = (!props.isFollowed) ? 'success' : 'primary';

	function followUnfollow() {
		props.changeFollowing(props.id, props.isFollowed);
	}

	const isUserInFollowingProcess = (users: number[] | [], id: number): boolean => {
		if (users.length) {
			return (users.some(el => el === id));
		}
		return false;
	}

	const isDisabled: boolean = isUserInFollowingProcess(props.usersInFollowingProcess, props.id) || props.loading;


	return (
		<Box sx={{
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			mr: { xs: 2, md: 3 },
			alignItems: 'center'
		}}>
			<CustomSceleton variant={"circular"} loading={props.loading} children={
				<Avatar
					alt={props.name}
					src={(props.url) ? props.url : undefined}
					sx={{ width: { xs: 100, md: 150 }, height: { xs: 100, md: 150 } }}
				/>
			} />
			{/* <CustomSceleton loading={props.loading} children={ } />*/}
			<Button
				component='button'
				color={color}
				sx={{ width: '200px' }}
				onClick={(followUnfollow)}
				disabled={isDisabled}
			>
				{(props.isFollowed) ? 'Unfollow' : 'Follow'}
			</Button>
		</Box>
	);
}

export default UserAvatar;

