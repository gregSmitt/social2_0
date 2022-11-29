import { StateType } from 'types/types';
import { createSelector } from 'reselect';


const getInitializedSelector = (state: StateType): boolean => {
	return state.appState.initialized;
}
export const getInitialized = createSelector(getInitializedSelector,
	(initialized: boolean) => initialized
); //! https://youtu.be/nDh92Vnf3_k?t=1640 <--- Если ты не ебешь что это, все вопросы сюда