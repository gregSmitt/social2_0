import UserCart from './UserCart/UserCart';
import { $FIX } from 'types/types';



interface Props {
	users: $FIX
	loading: boolean
	usersInFollowingProcess: number[] | []

	changeFollowing: (id: number, isFollowed: boolean) => (dispatch: $FIX) => void
}



const UsersList = (props: Props) => {
	const users = props.users.map((user: $FIX) => <UserCart
		key={user.id}
		imgUrl={user.photos.small}
		name={user.name}
		status={user.status}
		location={user.location}
		isFollowed={user.followed}
		userId={user.id}
		loading={props.loading}
		changeFollowing={props.changeFollowing}
		usersInFollowingProcess={props.usersInFollowingProcess}
	/>)
	return (
		<>
			{users}
		</>
	);

}

export default UsersList;

