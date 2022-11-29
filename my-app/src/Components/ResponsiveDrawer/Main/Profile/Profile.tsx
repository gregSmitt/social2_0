import { Box } from '@mui/material';
import { profileInformationType, PostsType, $FIX } from 'types/types';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfiltPosts/ProfilePosts';


interface Props {
	profile: profileInformationType
	loading: boolean
	posts: PostsType
	currentCache: string
	status: string | null
	isStatusEditable: boolean

	addPost: () => void
	changeCache: (value: string) => void
	updateStatus: (status: string | null) => (dispatch: $FIX) => void
}



const Profile = (props: Props) => {
	return (
		<>
			<Box sx={{
				p: { xs: 2, md: 3 },
				maxWidth: 1400
			}}>
				<ProfileInfo loading={props.loading} profile={props.profile} status={props.status} updateStatus={props.updateStatus} isStatusEditable={props.isStatusEditable} />
				<ProfilePosts loading={props.loading} addPost={props.addPost} changeCache={props.changeCache} posts={props.posts} currentCache={props.currentCache} />
			</Box>
		</>
	);
}

export default Profile;

