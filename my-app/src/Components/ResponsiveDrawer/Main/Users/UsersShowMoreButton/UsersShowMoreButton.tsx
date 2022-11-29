import { Box, Button } from '@mui/material';
import CustomSceleton from 'Components/Cmmon/CustomSkeleton';

interface Props {
	showUsers: () => void
	checkUsers: () => void
	isDisabled: boolean
	loading: boolean
}



const UsersShowMoreButton = (props: Props) => {

	const showMore = () => { props.showUsers(); props.checkUsers(); }

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 3 }}>
			<CustomSceleton loading={props.loading} children={
				<Button
					component='button'
					sx={{ width: '300px' }}
					onClick={showMore}
					disabled={props.isDisabled}
				>
					Show more
				</Button>
			} />
		</Box>
	);
}

export default UsersShowMoreButton;

