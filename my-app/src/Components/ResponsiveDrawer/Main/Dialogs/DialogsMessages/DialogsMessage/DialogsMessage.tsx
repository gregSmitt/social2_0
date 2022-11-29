import { Typography, Box, Paper } from '@mui/material';



interface MessageProps {
	message: string;
	userName: string;
	isMyMessage: boolean;
}

export default function DialogsMessage(props: MessageProps) {
	return (
		<Box sx={{
			p: 3,
			mb: 1,
			minHeight: '60px',
			position: 'relative',
			maxWidth: '80%',
			alignSelf: (props.isMyMessage) ? 'flex-start' : 'flex-end'
		}} >
			<Paper elevation={3} sx={{
				width: '100%',
				height: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: 0
			}} />
			<Typography sx={{ zIndex: 1, position: 'relative', textAlign: (props.isMyMessage) ? 'left' : 'right' }}>{props.userName}</Typography>
			<Typography sx={{ zIndex: 1, position: 'relative' }}>{props.message}</Typography>
		</Box>
	);
}