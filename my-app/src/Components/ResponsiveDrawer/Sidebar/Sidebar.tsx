import DrawerListItem from './DrawerListItem/DrawerListItem';
import { Settings } from '@mui/icons-material';
import { Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface Props {
	myId: number | null
}

const Sidebar = (props: Props) => {

	const profileUrl = props.myId ? `profile/${props.myId}` : 'profile/';

	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<DrawerListItem linkLable='Profile' linkUrl={profileUrl} />
				<DrawerListItem linkLable='Messages' linkUrl='messages' />
				<DrawerListItem linkLable='Users' linkUrl='users' />
			</List>
			<Divider />
			<List>
				<ListItem key={'Settings'} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Settings />
						</ListItemIcon>
						<ListItemText primary={'Settings'} />
					</ListItemButton>
				</ListItem>
			</List>
		</div>
	);
}

export default Sidebar;