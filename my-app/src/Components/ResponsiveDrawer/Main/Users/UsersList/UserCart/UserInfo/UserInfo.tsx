import { Box, Typography, Paper, Link, } from '@mui/material';
import CustomSceleton from 'Components/Cmmon/CustomSkeleton';
import { useNavigate } from 'react-router-dom';
import { $FIX } from 'types/types';

interface Props {
	name: string
	location: string
	status: string | null
	loading: boolean
	id: number
}



const UserInfo = (props: Props) => {
	const location = (props.location) ? props.location : 'From the night';
	const status = (props.status) ? props.status : 'I have no fantasy';


	const navigate = useNavigate();
	const href = `/profile/${props.id}`;
	const changePage = (e: $FIX) => {
		if (e) {
			e.preventDefault();
			navigate(href);
		}
	}


	return (
		<>
			<CustomSceleton sx={{ maxWidth: '80%', width: '100%', }} variant={'rounded'} loading={props.loading} children={
				<Box sx={{
					p: 2,
					minHeight: '100px',
					position: 'relative',
					maxWidth: '80%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}} >
					<Paper elevation={3} sx={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 0
					}} />
					<Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
						<Link
							href={href}
							onClick={changePage}
							component='a'
							variant='h5'
							sx={{
								zIndex: 1, position: 'relative',
								textDecoration: 'none'
							}} >
							{props.name}
						</Link>
						<Typography sx={{ zIndex: 1, position: 'relative' }}>{location}</Typography>
					</Box>
					<Typography sx={{ zIndex: 1, position: 'relative' }}>{status}</Typography>
				</Box>
			} />
		</>
	);
}

export default UserInfo;

