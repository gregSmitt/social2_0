import {
	showUsers,
	checkUsers,
	changeFollowingTC,
	changePage,
	getUsersTC
} from 'Redux/Reducers/users-reducer';
import { connect } from 'react-redux';
import UsersAPIContainer from './UsersAPIContainer';
import { StateType } from 'types/types';
import withRouter from 'Components/Cmmon/HOC/withRouter';
import { getQuantityOfPages, getUsers, getCurrentPageNumber, getUsersPerPortion, getUsersInFollowingProcess } from 'Redux/Selectors/users-selector';
import { getIsLoading } from 'Redux/Selectors/layout-selector';
import UsersAPIContainerWithHooks from './UsersAPIContainerWithHooks';

const mapStateToProps = (state: StateType) => {
	return {
		users: getUsers(state),
		quantityOfPages: getQuantityOfPages(state),
		currentPage: getCurrentPageNumber(state),
		usersPerPortion: getUsersPerPortion(state),
		usersInFollowingProcess: getUsersInFollowingProcess(state),
		loading: getIsLoading(state),
	}
}

const UsersContainer = connect(mapStateToProps, {
	showUsers,
	checkUsers,
	changeFollowing: changeFollowingTC,
	changePage,
	getUsersTC
})(withRouter(UsersAPIContainerWithHooks));
export default UsersContainer;