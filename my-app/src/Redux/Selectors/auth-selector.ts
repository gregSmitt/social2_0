import { StateType, authDataType, authStatusType } from 'types/types';
import { createSelector } from 'reselect';


const getMyIdSelector = (state: StateType): number | null => {
	return state.authState.data.id;
}
export const getMyId = createSelector(getMyIdSelector,
	(myId: number | null) => myId
); //! https://youtu.be/nDh92Vnf3_k?t=1640 <--- Если ты не ебешь что это, все вопросы сюда

const getIsLoginedSelector = (state: StateType): boolean => {
	return state.authState.isLogined;
}
export const getIsLogined = createSelector(getIsLoginedSelector,
	(isLogined: boolean) => isLogined
);

const getAuthDataSelector = (state: StateType): authDataType => {
	return state.authState.data;
}
export const getAuthData = createSelector(getAuthDataSelector,
	(authData: authDataType) => authData
);

const getAuthStatusSelector = (state: StateType): authStatusType => {
	return state.authState.authStatus;
}
export const getAuthStatus = createSelector(getAuthStatusSelector,
	(authStatus: authStatusType) => authStatus
);