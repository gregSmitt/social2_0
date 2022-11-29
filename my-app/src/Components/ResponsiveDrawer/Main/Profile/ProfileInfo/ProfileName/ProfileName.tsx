import { Typography, Skeleton } from '@mui/material';


interface Props {
	name: string
	loading: boolean
}


const ProfileName = (props: Props) => {
	return (

		<Typography component='h1' variant="h4" sx={{ fontSize: { xs: '1.9rem', md: '2.125rem' } }}>
			{props.loading ? <Skeleton /> : props.name}
		</Typography>
	);
}

export default ProfileName;

