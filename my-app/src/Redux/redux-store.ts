import { dialogsReducer } from './Reducers/dialogs-reducer';
import { profileReducer } from './Reducers/profile-reducer';
import { layoutReducer } from './Reducers/layout-reducer';
import { authReducer } from './Reducers/auth-reducer';
import { appReducer } from './Reducers/app-reducer';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'; //!$FIX
import { usersReducer } from './Reducers/users-reducer';
import thunk from 'redux-thunk';






let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	layotParameters: layoutReducer,
	usersPage: usersReducer,
	authState: authReducer,
	appState: appReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;