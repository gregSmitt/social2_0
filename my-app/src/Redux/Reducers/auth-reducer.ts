import { authAPI } from 'api/api';
import { authStateType, authDataType, actionType, $FIX } from 'types/types';

const emptyAuthData: authDataType = {
	id: null,
	login: null,
	email: null,
}

const initialState: authStateType = {
	data: emptyAuthData,
	isLogined: false,
	authStatus: {
		message: null,
		severity: 'info'
	},
}
const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const SET_LOGIN_FLAG = 'auth/SET_LOGIN_FLAG';
const SET_AUTH_STATUS = 'auth/SET_AUTH_STATUS';

export const authReducer = (state: authStateType = initialState, action: actionType) => {
	switch (action.type) {
		case SET_AUTH_DATA:
			return {
				...state,
				data: { ...action.data }
			}
		case SET_AUTH_STATUS:
			return {
				...state,
				authStatus: {
					message: action.text,
					severity: action.severity
				}
			}
		case SET_LOGIN_FLAG:
			return {
				...state,
				isLogined: action.bool
			}
		default: return state;
	}
}

export const setAuthData = (data: authDataType) => ({ type: SET_AUTH_DATA, data: data });
export const setLoginFlag = (isLogined: boolean) => ({ type: SET_LOGIN_FLAG, bool: isLogined });
export const setAuthStatus = (message: string, severity: 'error' | 'info' | 'success' | 'warning') => ({ type: SET_AUTH_STATUS, text: message, severity: severity });

export const getAuthDataTC = () => {
	return async (dispatch: $FIX) => {
		const responce = await authAPI.getAuthData();
		if (responce.data.resultCode === 0) {
			dispatch(setAuthData(responce.data.data));
			dispatch(setLoginFlag(true));
		} else dispatch(setLoginFlag(false));
		return responce;
	}
}

export const logIn = (email: string, password: string, rememberMe: boolean) => {
	return async (dispatch: $FIX) => {
		const responce = await authAPI.logIn(email, password, rememberMe);
		if (responce.data.resultCode === 0) {
			dispatch(getAuthDataTC());
			dispatch(setAuthStatus('Вход выполнен', 'success'));
		} else {
			dispatch(setAuthStatus(responce.data.messages[0], 'error'));
		}
	}
}

export const logOut = () => {
	return async (dispatch: $FIX) => {
		const responce = await authAPI.logOut();
		if (responce.data.resultCode === 0) {
			dispatch(setAuthData(emptyAuthData));
			dispatch(setLoginFlag(false));
			dispatch(setAuthStatus('Выход выполнен', 'success'));
		} else {
			dispatch(setAuthStatus(responce.data.messages[0], 'error'));
		}
	}
}