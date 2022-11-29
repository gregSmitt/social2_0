import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { authDataType, routerType } from 'types/types';
import AccauntMenu from './AccauntMenu/AccauntMenu';
import { $FIX } from 'types/types';


interface Props {
	authData: authDataType
	isLogined: boolean
	drawerWidth: number
	router: routerType
	logOut: () => (dispatch: $FIX) => void
	// handleDrawerToggle: any
}


const Header = (props: Props) => {
	const navigate = props.router.navigate;

	const myId = props.authData?.id ? props.authData?.id : 2;
	const changeUrl = () => {
		if (props.isLogined) {
			navigate(`/profile/${myId}`);
		} else navigate('/login');
	}



	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${props.drawerWidth}px)` },
					ml: { sm: `${props.drawerWidth}px` },
				}}
			>
				<Toolbar sx={{ maxWidth: '1400px' }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						// onClick={props.handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
						<Typography variant="h6" noWrap component="div">
							SOCIO web
						</Typography>
						<AccauntMenu isLogined={props.isLogined} changeUrl={changeUrl} logOut={props.logOut} />
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Header;

