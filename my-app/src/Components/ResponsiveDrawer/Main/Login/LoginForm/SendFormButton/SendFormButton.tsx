
import { Box, Button } from '@mui/material';

interface Props {
	loading: boolean
}



const SendFormButton = (props: Props) => {

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 3 }}>
			<Button
				component='button'
				disabled={props.loading}
				type='submit'
				sx={{ width: '300px' }}
			>
				Log in
			</Button>
		</Box>
	);
}

export default SendFormButton;