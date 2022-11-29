import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Interlocutors from './Interlocutors/Interlocutors';
import DialogsMessages from './DialogsMessages/DialogsMessages';
import DialogsAddMessage from './DialogsAddMessage/DialogsAddMessage';
import { SimpleTable, MessagesData } from 'types/types';


interface DialogsProps {
	usersListWidth: number
	drawerWidth: number
	interlocutors: SimpleTable
	messagesData: MessagesData
	currentCache: string
	addMessage: () => void
	changeCache: (newValue: string) => void
}


const Dialogs: FC<DialogsProps> = (props: DialogsProps) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	// if (props.isLogined) {
	return (
		<Box
			sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}
		>
			<Interlocutors
				value={value}
				usersListWidth={props.usersListWidth}
				handleChange={handleChange}
				interlocutors={props.interlocutors}
			/>
			<Box sx={{ width: '100%', p: 3, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxHeight: '100vh' }}>
				<DialogsMessages index={0} value={value} usersListWidth={props.usersListWidth} messagesData={props.messagesData} />
				<DialogsAddMessage
					usersListWidth={props.usersListWidth}
					drawerWidth={props.drawerWidth}
					addMessage={props.addMessage}
					changeCache={props.changeCache}
					currentCache={props.currentCache}
				/>
			</Box>
		</Box>
	);
	// } else {
	// 	return <Navigate to={'/login'} />
	// }

}

export default Dialogs