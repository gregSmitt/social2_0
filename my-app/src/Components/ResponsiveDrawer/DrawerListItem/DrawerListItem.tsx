import PublicIcon from '@mui/icons-material/Public'; //заменить на иконки по выбору для каждого пункта (пока хз как это сделать)
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";
import c from './DrawerListItem.module.css';

interface Props {
	linkLable: string
	linkUrl: string
}

export default function DrawerListItem(props: Props) {

	return (
		<ListItem key={props.linkLable} disablePadding >
			<ListItemButton sx={{ position: 'relative' }}>
				<Link
					to={props.linkUrl}
					className={c.link}
				>
				</Link>
				<ListItemIcon>
					<PublicIcon /> {/*заменить на иконки по выбору для каждого пункта (пока хз как это сделать) */}
				</ListItemIcon>
				<ListItemText primary={props.linkLable} sx={{ textDecoration: 'none' }} />
			</ListItemButton>
		</ListItem>
	);
}
