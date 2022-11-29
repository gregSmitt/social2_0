import { togglePreloader } from 'Redux/Reducers/layout-reducer';
import { setLoginFlag, logOut } from 'Redux/Reducers/auth-reducer';
import { connect } from 'react-redux';
import { StateType } from 'types/types';
import HeaderAPIContainer from './HeaderAPIContainer';
import withRouter from 'Components/Cmmon/HOC/withRouter';
import { getDrawerWidth } from 'Redux/Selectors/layout-selector';
import { getAuthData, getIsLogined } from 'Redux/Selectors/auth-selector';

const mapStateToProps = (state: StateType) => {
	return {
		authData: getAuthData(state),
		isLogined: getIsLogined(state),
		drawerWidth: getDrawerWidth(state)
	}
}

const HeaderContainer = connect(mapStateToProps, {
	togglePreloader,
	setLoginFlag,
	logOut
})(withRouter(HeaderAPIContainer));
export default HeaderContainer;