import { $FIX } from 'types/types';
import { Box } from '@mui/material';
import { profileInformationType } from 'types/types';
import ProfileAbout from './ProfileAbout/ProfileAbout';
import ProfileName from './ProfileName/ProfileName';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';


interface Props {
	profile: profileInformationType
	loading: boolean
	status: string | null
	isStatusEditable: boolean
	updateStatus: (status: string | null) => (dispatch: $FIX) => void
}


const ProfileInfo = (props: Props) => {
	return (
		<Box
			component="div"
			sx={{ display: 'flex' }}
		>
			<ProfilePhoto name={props.profile.fullName} imgUrl={props.profile.photos.large} loading={props.loading} />
			<Box
				component="div" sx={{ width: '100%' }}
			>
				<ProfileName name={props.profile.fullName} loading={props.loading} />
				{
					props.status &&
					<ProfileStatusWithHooks
						status={props.status}
						updateStatus={props.updateStatus}
						isStatusEditable={props.isStatusEditable}
						loading={props.loading} />
				}
				<ProfileAbout loading={props.loading} />
			</Box>
		</Box>
	);
}

export default ProfileInfo;

