import { StateType } from 'types/types';
import { createSelector } from 'reselect';


const getIsLoadingSelector = (state: StateType): boolean => {
	return state.layotParameters.isPreloader;
}
export const getIsLoading = createSelector(getIsLoadingSelector,
	(isPreloader: boolean) => isPreloader
); //! https://youtu.be/nDh92Vnf3_k?t=1640 <--- Если ты не ебешь что это, все вопросы сюда


const getUsersListWidthSelector = (state: StateType): number => {
	return state.layotParameters.usersListWidth;
}
export const getUsersListWidth = createSelector(getUsersListWidthSelector,
	(usersListWidth: number) => usersListWidth
);

const getDrawerWidthSelector = (state: StateType): number => {
	return state.layotParameters.drawerWidth;
}
export const getDrawerWidth = createSelector(getDrawerWidthSelector,
	(drawerWidth: number) => drawerWidth
);