import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { $FIX } from 'types/types';


import React, { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';


interface Props {
	isLogined: boolean
	changeUrl: () => void
	logOut: () => (dispatch: $FIX) => void
}



const AccauntMenu: FC<Props> = (props: Props) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleToMyAccount = () => {
		props.changeUrl();
		handleClose();
	}

	const handleLogOut = () => {
		props.logOut();
		handleClose();
	}

	return (
		<div>
			<IconButton
				color="inherit"
				aria-label="login"
				edge="end"
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<AccountCircleIcon sx={{ width: '40px', height: '40px' }} />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 0.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 23,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem onClick={handleToMyAccount}>
					<Avatar /> {props.isLogined ? 'My account' : 'Log in'}
				</MenuItem>
				<Divider />
				{props.isLogined &&
					<MenuItem onClick={handleLogOut}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						Logout
					</MenuItem>
				}
			</Menu>
		</div>
	);
}


export default AccauntMenu