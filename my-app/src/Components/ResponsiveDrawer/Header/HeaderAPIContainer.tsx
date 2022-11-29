import { $FIX, authDataType, routerType } from 'types/types';
import React, { FC } from 'react';
import Header from './Header';

interface Props {
	authData: authDataType
	isLogined: boolean
	drawerWidth: number
	router: routerType
	// handleDrawerToggle: any

	setLoginFlag: (flag: boolean) => void
	logOut: () => (dispatch: $FIX) => void
}




const HeaderAPIContainer: FC<Props> = (props: Props) => {
	return <Header {...props} />
}

export default HeaderAPIContainer