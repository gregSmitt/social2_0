import { Box, Typography } from '@mui/material';
import { $FIX } from 'types/types';

interface Props {
	users: $FIX
	isNoMoreUsers: boolean
	quantityOfPages: number
	currentPage: number | null

	showUsers: () => void
	checkUsers: () => void
	followUser: (id: number) => void
	changePage: (number: number) => void
}


const UsersSkeleton = (props: Props) => {
	return (
		<Box sx={{
			p: { xs: 2, md: 3 },
			maxWidth: 1400
		}}>
		</Box>
	);
}

export default UsersSkeleton;