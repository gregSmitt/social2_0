import { actionType, LayotParametersType } from 'types/types';

const initialState = {
	usersListWidth: 240,
	drawerWidth: 240,
	isPreloader: false
}

const TOGGLE_PRELOADER = 'layout/TOGGLE_PRELOADER';

export const layoutReducer = (state: LayotParametersType = initialState, action: actionType) => {
	switch (action.type) {
		case TOGGLE_PRELOADER:
			return {
				...state,
				isPreloader: action.bool
			}
		default: return state;
	}
}

export const togglePreloader = (isLoading: boolean) => ({ type: TOGGLE_PRELOADER, bool: isLoading });