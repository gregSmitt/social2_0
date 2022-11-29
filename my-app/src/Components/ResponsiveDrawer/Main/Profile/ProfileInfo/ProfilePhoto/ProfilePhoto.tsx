import { Avatar } from '@mui/material';
import CustomSceleton from 'Components/Cmmon/CustomSkeleton';


interface Props {
	name: string
	imgUrl: string | null
	loading: boolean
}


const ProfilePhoto = (props: Props) => {
	const imgUrl = props.imgUrl ? props.imgUrl : undefined;
	const params = { width: { xs: 100, md: 200 }, height: { xs: 100, md: 200 }, mr: { xs: 2, md: 3 } };
	return (
		<>
			<CustomSceleton sx={params} loading={props.loading} variant={'circular'} children={
				<Avatar
					alt={props.name}
					src={imgUrl}
					sx={params}
				/>} />

		</>
	);
}

export default ProfilePhoto;

