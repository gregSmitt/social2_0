import { connect } from 'react-redux';
import { getAuthStatus } from 'Redux/Selectors/auth-selector';
import { StateType } from 'types/types';
import Snack from './Snack';


const mapStateToProps = (state: StateType) => {
	return {
		authStatus: getAuthStatus(state),
	}
}

const SnackContainer = connect(mapStateToProps, {})(Snack);
export default SnackContainer;