import React, { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Main from './Main/Main';
import HeaderContainer from './Header/HeaderContainer';
import Sidebar from './Sidebar/Sidebar';
import { connect } from 'react-redux';
import { initializeApp } from 'Redux/Reducers/app-reducer';
import Preloader from 'Components/Cmmon/Preloader/Preloader';
import { $FIX, StateType } from 'types/types';
import { getInitialized } from 'Redux/Selectors/app-selector';
import { getMyId } from 'Redux/Selectors/auth-selector';

const drawerWidth = 240;    //!
const usersListWidth = 240; //!Нужно брать эти значения из стора

interface Props {
	window?: () => Window
	myId: number | null
}
interface InitializedProps {
	initialized: boolean
	initializeApp: () => void
	myId: number | null
}

const ResponsiveDrawer = (props: Props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<HeaderContainer />
			{/* <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} /> */}
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					<Sidebar myId={props.myId} />
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					<Sidebar myId={props.myId} />
				</Drawer>
			</Box>
			<Main drawerWidth={drawerWidth} usersListWidth={usersListWidth} />
		</Box>
	);
}

const InitializeWithHooks: FC<InitializedProps> = (props: InitializedProps) => {
	useEffect(() => {
		props.initializeApp();
	}, [props.initialized]);

	if (props.initialized) {
		return <ResponsiveDrawer myId={props.myId} />
	} else return <Preloader />
}


const mapStateToProps = (state: StateType) => {
	return {
		initialized: getInitialized(state),
		myId: getMyId(state),
	}
}
const InitializeContainer = connect(mapStateToProps, { initializeApp })
	(InitializeWithHooks);

export default InitializeContainer;