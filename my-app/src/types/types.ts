import { Location, NavigateFunction, Params } from 'react-router-dom';

//===================================================================== General ============================================================
export type ChangeCaheType = (string: string) => void
export type ChangeStateType = () => void
export type $FIX = any;
export type routerType = {
	location: Location
	navigate: NavigateFunction
	params: Readonly<Params<string>>
}

//===================================================================== DialogsPage ============================================================
export type SimpleTable = { userId: string, name: string }[];
export type MessagesData = {
	userId: number
	messages:
	{
		messageId: number
		messageData: { text: string, author: string, isMe: boolean }
	}[]
}[];

export type FormAddMessageType = {
	cache: string
	changeCahe: ChangeCaheType
}

export type DialogsPageType = {
	interlocutorsData: SimpleTable
	messagesData: MessagesData
	addMessageCache: string
	currentUserId: string
}

export type NewDialogsPageType = {
	interlocutorsData: SimpleTable
	messagesData: MessagesData
	addMessageCache: string
	currentUserId: string
}

//===================================================================== ProfilePage ============================================================

export type PostsType =
	{
		id: number
		text: string
		imageUrl: string
	}[]



export type FormAddPostType = {
	cache: string
	changeCahe: ChangeCaheType
}

export type profileInformationType = {
	aboutMe: string | null
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	fullName: string
	contacts: {
		github?: string | null
		vk: string | null
		facebook: string | null
		instagram: string | null
		twitter: string | null
		website: string | null
		youtube: string | null
		mainLink: string | null
	}
	photos: {
		small: string | null
		large: string | null
	}
}

export type ProfilePageType = {
	currentProfileId: number | null
	profileInformation: profileInformationType
	postsData: PostsType
	addPostCache: string
	status: string | null
}

//===================================================================== UsersPage ========================================================

export type UserPhotoType = {
	small: string | null,
	large: string | null
}

export type UserDataType = {
	name: string
	id: number | null
	uniqueUrlName: string | null,
	photos: UserPhotoType
	status: string | null
	followed: boolean
}

export type UsersDataType = UserDataType[]

export type UsersStateType = {
	usersInFollowingProcess: [] | number[]
	users: UsersDataType
	quantityOfPages: number
	currentPage: number | null
	usersPerPortion: number,
}


//===================================================================== authState ========================================================

export type authDataType = {
	id: number | null
	login: string | null
	email: string | null
}

export type authStatusType = {
	message: string | null
	severity: 'error' | 'info' | 'success' | 'warning'
}

export type authStateType = {
	data: authDataType
	isLogined: boolean
	authStatus: authStatusType
}
//===================================================================== Layout ===========================================================

export type LayotParametersType = {
	usersListWidth: number
	drawerWidth: number
	isPreloader: boolean
}


//=====================================================================  App  ============================================================
export type appStateType = {
	initialized: boolean
}


//===================================================================== Store ============================================================

export type actionType = {
	type: string
	text?: string
	id?: string
	users?: $FIX
	number?: number
	bool?: boolean
	data?: profileInformationType
	severity?: 'error' | 'info' | 'success' | 'warning'
}

export type actionCreatorType = () => actionType


export type StateType = {
	dialogsPage: DialogsPageType
	profilePage: ProfilePageType
	appState: appStateType
	authState: authStateType
	layotParameters: LayotParametersType
	usersPage: UsersStateType
}
