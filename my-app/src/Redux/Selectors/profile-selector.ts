import { PostsType, StateType, profileInformationType } from 'types/types';
import { createSelector } from 'reselect';


const getPostsDataSelector = (state: StateType): PostsType => {
	return state.profilePage.postsData;
}
export const getPostsData = createSelector(getPostsDataSelector,
	(postsData: PostsType) => postsData
); //! https://youtu.be/nDh92Vnf3_k?t=1640 <--- Если ты не ебешь что это, все вопросы сюда

const getAddPostCacheSelector = (state: StateType): string => {
	return state.profilePage.addPostCache;
}
export const getAddPostCache = createSelector(getAddPostCacheSelector,
	(addPostCache: string) => addPostCache
);

const getProfileStatusSelector = (state: StateType): string | null => {
	return state.profilePage.status;
}
export const getProfileStatus = createSelector(getProfileStatusSelector,
	(status: string | null) => status
);

const getProfileInformationSelector = (state: StateType): profileInformationType => {
	return state.profilePage.profileInformation;
}
export const getProfileInformation = createSelector(getProfileInformationSelector,
	(profileInformation: profileInformationType) => profileInformation
);