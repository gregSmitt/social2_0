import { Box } from "@mui/material";
import Post from "./Post/Post";
import { PostsType } from 'types/types';



interface Props {
	posts: PostsType
	loading: boolean
}


const Posts = (props: Props) => {
	const posts = props.posts.map(post => <Post key={post.id} text={post.text} imageUrl={post.imageUrl} loading={props.loading} />)

	return (
		<>
			<Box sx={{ mt: 3, display: 'flex', flexDirection: 'column-reverse' }}>
				{posts}
			</Box>
		</>
	);
}

export default Posts;

