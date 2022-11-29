import { Typography, ListItem, Skeleton } from '@mui/material';


interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	pointName: string
	pointInfo: string
	loading: boolean
}

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}


const StringAbout = (props: Props) => {
	const name = capitalizeFirstLetter(props.pointName);
	return (
		<ListItem sx={{ display: 'flex', alignItems: 'flex-start', pl: { xs: 0, md: '16px' }, pr: { xs: 0, md: '16px' } }}>
			<Typography component='p' variant="h6" sx={{ mr: 1, flexWrap: 'nowrap' }}>
				{props.loading ? <Skeleton sx={{ minWidth: '80px' }} /> : `${name}:`}
			</Typography>
			<Typography component='p' variant="h6" sx={{ fontWeight: 400 }}>
				{props.loading ? <Skeleton sx={{ minWidth: '220px' }} /> : props.pointInfo}
			</Typography>
		</ListItem>
	);
}

export default StringAbout;

