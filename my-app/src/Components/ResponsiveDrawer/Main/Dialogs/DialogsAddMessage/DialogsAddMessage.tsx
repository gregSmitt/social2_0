import React from 'react';
import { TextField, FormGroup, Button, Box } from "@mui/material";


interface Props {
	usersListWidth: number
	drawerWidth: number
	currentCache: string
	addMessage: () => void
	changeCache: (newValue: string) => void
}




export default function DialogsAddMessage(props: Props) {

	const textField: React.RefObject<HTMLInputElement> = React.createRef();

	// const addMessageHendler = () => props.addMessage();

	const changeCaheHendler = () => {
		if (textField.current) {
			props.changeCache(textField.current.value);
		}
	}


	return (
		<FormGroup sx={{
			position: "fixed",
			bottom: 0,
			left: `${props.usersListWidth + props.drawerWidth}px`,
			right: 0,
			backgroundColor: '#fff',
			zIndex: 10,
			pl: 3,
			pr: 3,
		}}>
			<TextField
				id="outlined-basic"
				label="New Message"
				variant="outlined"
				multiline={true}
				inputRef={textField}
				value={props.currentCache}
				onChange={changeCaheHendler}
				sx={{ width: '100%' }}
				rows={3}
			/>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button
					color="success"
					sx={{ width: '200px', float: 'right' }}
					onClick={props.addMessage}
				>
					Send Message
				</Button>
			</Box>
		</FormGroup>
	);
}