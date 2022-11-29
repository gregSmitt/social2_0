import { UsersDataType } from './../../types/types';
import { createSelector } from 'reselect';
import { StateType } from 'types/types';

const getUsersSelector = (state: StateType): UsersDataType => {
	return state.usersPage.users;
}
const getQuantityOfPagesSelector = (state: StateType): number => {
	return state.usersPage.quantityOfPages;
}
const getCurrentPageNumberSelector = (state: StateType): number | null => {
	return state.usersPage.currentPage;
}
const getUsersPerPortionSelector = (state: StateType): number => {
	return state.usersPage.usersPerPortion;
}
const getUsersInFollowingProcessSelector = (state: StateType): number[] => {
	return state.usersPage.usersInFollowingProcess;
}


export const getUsers = createSelector(getUsersSelector,
	(users: UsersDataType) => users
); //! https://youtu.be/nDh92Vnf3_k?t=1640 <--- Если ты не ебешь что это, все вопросы сюда
export const getQuantityOfPages = createSelector(getQuantityOfPagesSelector,
	(quantityOfPages: number) => quantityOfPages
);
export const getCurrentPageNumber = createSelector(getCurrentPageNumberSelector,
	(currentPage: number | null) => currentPage);
export const getUsersPerPortion = createSelector(getUsersPerPortionSelector,
	(usersPerPortion: number) => usersPerPortion);
export const getUsersInFollowingProcess = createSelector(getUsersInFollowingProcessSelector,
	(usersInFollowingProcess: number[]) => usersInFollowingProcess);