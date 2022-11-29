import { getAuthDataTC } from 'Redux/Reducers/auth-reducer';
import { appStateType, actionType, $FIX } from 'types/types';


const initialState: appStateType = {
	initialized: false
}
const INITIALIZED_SUCCESS = 'initialization/INITIALIZED_SUCCESS';

export const appReducer = (state: appStateType = initialState, action: actionType) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default: return state;
	}
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });


export const initializeApp = () => (dispatch: $FIX) => {
	let promise = dispatch(getAuthDataTC());
	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess());
		});
}


