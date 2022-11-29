import { $FIX, profileInformationType, PostsType, routerType } from 'types/types';
import React from 'react';
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




export default class ProfileAPIContainer extends React.Component<Props, $FIX> {

	profileId: number = parseInt(this.props.router.params.id ? this.props.router.params.id : '2')

	componentDidMount(): void {
		this.props.getProfileData(this.profileId);
		this.props.getStatus(this.profileId);
	}

	componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<any>, snapshot?: any): void {
		if ((prevProps.router.params.id !== this.props.router.params.id) && this.props.router.params.id) {
			this.profileId = parseInt(this.props.router.params.id);
			this.props.getProfileData(this.profileId);
			this.props.getStatus(this.profileId);
		}
	}


	render() {
		return <Profile {...this.props} isStatusEditable={(this.props.myId === this.profileId)} />
	}
}