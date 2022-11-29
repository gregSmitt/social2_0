import { Typography } from "@mui/material";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import { PostsType } from 'types/types';



interface Props {
	posts: PostsType
	currentCache: string
	loading: boolean

	addPost: () => void
	changeCache: (value: string) => void
}



const ProfilePosts = (props: Props) => {
	return (
		<>
			<Typography component='p' variant='h4' sx={{ mt: 3 }}>
				My Posts
			</Typography>
			<NewPost currentCache={props.currentCache} addPost={props.addPost} changeCache={props.changeCache} />
			<Posts loading={props.loading} posts={props.posts} />
		</>
	);
}

export default ProfilePosts;

