import { userAPI } from 'api/api';
import { $FIX, actionType, UserDataType, UsersStateType } from 'types/types';
import { profileAPI } from 'api/api';
import { togglePreloader } from './layout-reducer';

const SHOW_USERS = 'users/SHOW_USERS';
const CHECK_USERS = 'users/CHECK_USERS';
const FOLLOW_USER = 'users/FOLLOW_USER';
const SET_USERS = 'users/SET_USERS';
const SET_QUANTITY_OF_PAGES = 'users/SET_QUANTITY_OF_PAGES';
const CHANGE_CURRENT_PAGE = 'users/CHANGE_CURRENT_PAGE';
const TOGGLE_FOLLOWING_PROCESS = 'users/TOGGLE_FOLLOWING_PROCESS';


const initialState: UsersStateType = {
	usersInFollowingProcess: [],
	users: [
		{
			"name": "Ответ пришел",
			"id": 100000000001,
			"uniqueUrlName": null,
			"photos": {
				"small": null,
				"large": null
			},
			"status": null,
			"followed": false
		},
		{
			"name": "Но какого-то хуя",
			"id": 100000000002,
			"uniqueUrlName": null,
			"photos": {
				"small": null,
				"large": null
			},
			"status": null,
			"followed": false
		},
		{
			"name": "Не отрисовался",
			"id": 100000000003,
			"uniqueUrlName": null,
			"photos": {
				"small": null,
				"large": null
			},
			"status": null,
			"followed": false
		},
	],
	quantityOfPages: 10,
	currentPage: null,
	usersPerPortion: 10,
}

export const usersReducer = (state: UsersStateType = initialState, action: actionType) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: [...action.users],
			}
		case SET_QUANTITY_OF_PAGES:
			if (action.number) {
				return {
					...state,
					quantityOfPages: Math.ceil(action.number / state.usersPerPortion)
				}
			}
			return state
		case CHANGE_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.number
			}
		case TOGGLE_FOLLOWING_PROCESS:
			if (action.id) {
				const userId: number = parseInt(action.id)

				if (action.bool) {
					return {
						...state,
						usersInFollowingProcess: [...state.usersInFollowingProcess, action.id]
					}
				} else {
					return {
						...state,
						usersInFollowingProcess: state.usersInFollowingProcess.filter((id: number) => id !== userId)
					}
				}
			}
			return state
		case FOLLOW_USER:
			if (action.id) {
				const id: number = parseInt(action.id);
				return {
					...state,
					users: state.users.map((user: UserDataType) => {
						if (user.id === id) {
							return { ...user, followed: action.bool }
						}
						return user;
					})
				}
			}
			return state;
		default: return state;
	}
}


export const showUsers = () => ({ type: SHOW_USERS });
export const checkUsers = () => ({ type: CHECK_USERS });
export const changeFollowing = (id: number, flag: boolean) => ({ type: FOLLOW_USER, bool: flag, id: id });
export const setUsers = (users: $FIX) => ({ type: SET_USERS, users: users });
export const setPages = (number: number) => ({ type: SET_QUANTITY_OF_PAGES, number: number });
export const changePage = (number: number) => ({ type: CHANGE_CURRENT_PAGE, number: number });
export const toggleFollowingProcess = (id: number, flag: boolean) => ({ type: TOGGLE_FOLLOWING_PROCESS, id: id, bool: flag });

export const getUsersTC = (currentPage: number, usersPerPortion: number) => {
	return async (dispatch: $FIX) => {
		dispatch(togglePreloader(true));
		const responce = await userAPI.getUsers(currentPage, usersPerPortion);
		dispatch(setUsers(responce.data.items));
		dispatch(setPages(responce.data.totalCount));
		dispatch(togglePreloader(false));
	}
}
export const changeFollowingTC = (id: number, isFollowed: boolean) => {
	return async (dispatch: $FIX) => {
		dispatch(toggleFollowingProcess(id, true));
		const responce = isFollowed ? await profileAPI.unfollowUser(id) : await profileAPI.followUser(id);
		const flag = isFollowed ? false : true;
		if ((responce.data.resultCode === 0)) dispatch(changeFollowing(id, flag));
		dispatch(toggleFollowingProcess(id, false));
	}
}
