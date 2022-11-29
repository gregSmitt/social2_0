import { $FIX, profileInformationType, PostsType, routerType } from 'types/types';
import React, { FC, useEffect } from 'react';
import Profile from './Profile';

interface Props {
	profile: profileInformationType
	myId: number | null
	loading: boolean
	posts: PostsType
	currentCache: string
	router: routerType
	status: string | null

	getProfileData: (id: number) => (dispatch: $FIX) => void
	getStatus: (id: number) => (dispatch: $FIX) => void
	togglePreloader: (flag: boolean) => void
	addPost: () => void
	changeCache: (value: string) => void
	updateStatus: (status: string | null) => (dispatch: $FIX) => void
}




const ProfileAPIContainerWithHooks: FC<Props> = (props: Props) => {

	let profileId: number = parseInt(props.router.params.id ? props.router.params.id : '2');

	useEffect(() => {
		props.getProfileData(profileId);
		props.getStatus(profileId);
		if (props.router.params.id) {
			profileId = parseInt(props.router.params.id);
			props.getProfileData(profileId);
			props.getStatus(profileId);
		}
	}, [props.router.params.id]);


	return <Profile {...props} isStatusEditable={(props.myId === profileId)} />
}

export default ProfileAPIContainerWithHooks