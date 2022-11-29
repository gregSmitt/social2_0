import Login from './Login';
import { logIn } from 'Redux/Reducers/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAuthData, getAuthStatus, getIsLogined } from 'Redux/Selectors/auth-selector';
import { StateType } from 'types/types';
import { getIsLoading } from 'Redux/Selectors/layout-selector';


const mapStateToProps = (state: StateType) => {
	return {
		isLogined: getIsLogined(state),
		loginedUserData: getAuthData(state),
		authStatus: getAuthStatus(state),
		loading: getIsLoading(state),
	}
}

const LoginContainer = connect(mapStateToProps, { logIn })
	(Login);
export default LoginContainer;