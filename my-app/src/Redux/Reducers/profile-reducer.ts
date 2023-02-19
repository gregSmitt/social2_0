import { profileAPI } from 'api/api';
import { actionType, ProfilePageType, profileInformationType, $FIX } from 'types/types';
import { togglePreloader } from './layout-reducer';


const ADD_POST = 'profile/ADD_POST';
const SET_ADD_POST_CACHE = 'profile/SET_ADD_POST_CACHE';
const SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA';
const CHANGE_CURRENT_PROFILE_ID = 'profile/CHANGE_CURRENT_PROFILE_ID';
const SET_STATUS = 'profile/SET_STATUS';


const initialState: ProfilePageType = {
	currentProfileId: null,
	profileInformation: {
		"aboutMe": "какое-то описание",
		"contacts": {
			"facebook": "facebook.com",
			"website": null,
			"vk": "vk.com/dimych",
			"twitter": "https://twitter.com/@sdf",
			"instagram": "instagra.com/sds",
			"youtube": null,
			"github": "github.com",
			"mainLink": null
		},
		"lookingForAJob": true,
		"lookingForAJobDescription": "что-то где-то как-то",
		"fullName": "samurai dimych",
		"userId": 2,
		"photos": {
			"small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=9",
			"large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=9"
		}
	},
	addPostCache: '',
	postsData: [
		{
			id: 1,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio quaerat quam fugit esse, dolor officiis quisquam consequatur dignissimos sunt.',
			imageUrl: 'https://routinejournal.com/wp-content/uploads/2019/07/11.jpg',
		},
		{
			id: 2,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio quaerat quam fugit esse, dolor officiis quisquam consequatur dignissimos sunt.',
			imageUrl: 'https://routinejournal.com/wp-content/uploads/2019/07/11.jpg',
		},
		{
			id: 3,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio quaerat quam fugit esse, dolor officiis quisquam consequatur dignissimos sunt.',
			imageUrl: 'https://routinejournal.com/wp-content/uploads/2019/07/11.jpg',
		}
	],
	status: null,
}

export const profileReducer = (state: ProfilePageType = initialState, action: actionType) => {
	switch (action.type) {
		case CHANGE_CURRENT_PROFILE_ID:
			return {
				...state,
				currentProfileId: action.id
			}
		case SET_PROFILE_DATA:
			if (action.data) {
				return {
					...state,
					profileInformation: {
						...action.data,
						contacts: { ...action.data.contacts },
						photos: { ...action.data.photos }
					}
				}
			}
			return state
		case ADD_POST:
			if (state.addPostCache) {
				return {
					...state,
					postsData: [
						...state.postsData,
						{
							id: state.postsData[state.postsData.length - 1].id + 1, //get last post's id and add 1 
							text: state.addPostCache,
							imageUrl: 'https://routinejournal.com/wp-content/uploads/2019/07/11.jpg'
						}
					],
					addPostCache: ''
				}
			};
			return state;
		case SET_ADD_POST_CACHE:
			if (action.text || action.text === '') { //!КОСТЫЛЬ
				state = {
					...state,
					addPostCache: action.text
				}
			}
			return state;
		case SET_STATUS:
			return {
				...state,
				status: action.text
			}
		default: return state;
	}
}

export const addPost = () => ({ type: ADD_POST })
export const changeCache = (cache: string) => ({ type: SET_ADD_POST_CACHE, text: cache })
export const setProfileData = (profileData: profileInformationType) => ({ type: SET_PROFILE_DATA, data: profileData })
export const changeCurrentProfileId = (id: number | null) => ({ type: CHANGE_CURRENT_PROFILE_ID, id: id })
export const setStatus = (status: string | null) => ({ type: SET_STATUS, text: status })

export const getProfileTC = (id: number) => {
	return async (dispatch: $FIX) => {
		dispatch(togglePreloader(true));
		const responce = await profileAPI.getProfile(id);
		dispatch(setProfileData(responce.data));
		dispatch(togglePreloader(false));
	}
}

export const getStatus = (id: number) => {
	return async (dispatch: $FIX) => {
		const responce = await profileAPI.getStatus(id);
		dispatch(setStatus(responce.data));
	}
}
export const updateStatus = (status: string | null) => {
	return async (dispatch: $FIX) => {
		const responce = await profileAPI.updateStatus(status);
		if (responce.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	}
}
