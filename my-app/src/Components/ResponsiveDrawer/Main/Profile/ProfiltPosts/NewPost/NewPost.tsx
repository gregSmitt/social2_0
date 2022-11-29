import React from 'react';
import { TextField, FormGroup, Button, Box } from "@mui/material";



interface Props {
	currentCache: string
	addPost: () => void
	changeCache: (value: string) => void
}


const NewPost = (props: Props) => {
	const textField: React.RefObject<HTMLInputElement> = React.createRef();

	const addPostHandler = () => props.addPost();

	const changeCaheHandler = () => {
		if (textField.current) {
			props.changeCache(textField.current.value);
		}
	}

	return (
		<FormGroup>
			<TextField
				value={props.currentCache}
				onChange={changeCaheHandler}
				inputRef={textField}
				id="outlined-basic"
				label="New Post"
				variant="outlined"
				multiline={true} sx={{ mt: 1, width: '100%' }}
			/>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button
					color="success"
					component='button'
					onClick={addPostHandler}
					sx={{ width: '200px', float: 'right' }}
				>
					Add Post
				</Button>
			</Box>
		</FormGroup>
	);
}

export default NewPost;

