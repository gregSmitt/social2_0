import { togglePreloader } from 'Redux/Reducers/layout-reducer';
import {
	getProfileTC,
	//  changeCurrentProfileId,
	addPost,
	changeCache,
	getStatus,
	updateStatus
} from 'Redux/Reducers/profile-reducer';
import { connect } from 'react-redux';
import { StateType } from 'types/types';
import ProfileAPIContainer from './ProfileAPIContainer';
import withRouter from 'Components/Cmmon/HOC/withRouter';
import withRedirectToLogin from 'Components/Cmmon/HOC/withRedirectToLogin';
import { getIsLogined, getMyId } from 'Redux/Selectors/auth-selector';
import { getIsLoading } from 'Redux/Selectors/layout-selector';
import { getAddPostCache, getPostsData, getProfileInformation, getProfileStatus } from 'Redux/Selectors/profile-selector';
import ProfileAPIContainerWithHooks from './ProfileAPIContainerWithHooks';

const mapStateToProps = (state: StateType) => {
	return {
		profile: getProfileInformation(state),
		myId: getMyId(state),
		loading: getIsLoading(state),
		posts: getPostsData(state),
		currentCache: getAddPostCache(state),
		isLogined: getIsLogined(state),
		status: getProfileStatus(state),
	}
}

// const fuckingObertka = compose<$FIX, $FIX, $FIX>(
// 	withRouter,
// 	withRedirectToLogin
// )(ProfileAPIContainer)


const ProfileContainer = connect(mapStateToProps, {
	getProfileData: getProfileTC,
	// changeCurrentProfileId,
	togglePreloader,
	addPost,
	changeCache,
	getStatus,
	updateStatus
})(withRouter(withRedirectToLogin(ProfileAPIContainerWithHooks)));
export default ProfileContainer;