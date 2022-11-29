import Dialogs from './Dialogs';
import { addMessage, changeCache } from 'Redux/Reducers/dialogs-reducer';
import { connect } from 'react-redux';
import redirectToLogin from 'Components/Cmmon/HOC/withRedirectToLogin';
import { getAddMessageCache, getInterlocutorsData, getMessagesData } from 'Redux/Selectors/dialogs-selector ';
import { getDrawerWidth, getUsersListWidth } from 'Redux/Selectors/layout-selector';

const mapStateToPropsForRdirect = (state: any) => {
	return {
		isLogined: state.authState.isLogined
	}
}
const connectedRedirectToLogin = connect(mapStateToPropsForRdirect, {})(redirectToLogin(Dialogs))

const mapStateToProps = (state: any) => {
	return {
		interlocutors: getInterlocutorsData(state),
		messagesData: getMessagesData(state),
		currentCache: getAddMessageCache(state),
		usersListWidth: getUsersListWidth(state),
		drawerWidth: getDrawerWidth(state),
	}
}

const DialogsContainer = connect(mapStateToProps, {
	addMessage,
	changeCache,
})(connectedRedirectToLogin);
export default DialogsContainer;