import { Box } from '@mui/material';
import DialogsMessage from './DialogsMessage/DialogsMessage';
import { useParams } from 'react-router-dom';
import { MessagesData } from 'types/types';
import React, { useRef, useEffect } from 'react';

const ScrollTo = () => {
	const divRef: React.RefObject<HTMLInputElement> = useRef(null);

	useEffect(() => {
		if (divRef.current) {
			divRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	});

	return <div ref={divRef} />;
}

interface MessagesProps {
	index: number
	value: number
	usersListWidth: number
	messagesData: MessagesData
}



export default function DialogsMessages(props: MessagesProps) {

	const { id } = useParams();
	const idNumber = (id) ? parseInt(id) : 1;

	const messages = props.messagesData[idNumber - 1].messages.map((message) => {
		return (
			<DialogsMessage
				key={message.messageId}
				userName={message.messageData.author}
				message={message.messageData.text}
				isMyMessage={message.messageData.isMe} />
		)
	})

	return (
		<Box
			role="tabpanel"
			hidden={props.value !== props.index}
			id={`vertical-tabpanel-${props.index}`}
			aria-labelledby={`vertical-tab-${props.index}`}
			sx={{ width: '100%', display: 'flex', flexDirection: 'column', pb: '145px', pl: `${props.usersListWidth}px` }}
		>
			{props.value === props.index && (
				<>
					{messages}
					<ScrollTo />
				</>
			)}
		</Box>
	);
}