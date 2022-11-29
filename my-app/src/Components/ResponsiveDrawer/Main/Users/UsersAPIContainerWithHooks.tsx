import { $FIX, routerType } from 'types/types';
import React, { FC, useEffect } from 'react';
import Users from './Users';


interface Props {
	users: $FIX
	isNoMoreUsers: boolean
	quantityOfPages: number
	// currentPage: number | null
	usersPerPortion: number
	loading: boolean
	router: routerType
	usersInFollowingProcess: number[] | []

	showUsers: () => void
	checkUsers: () => void
	changeFollowing: (id: number, isFollowed: boolean) => (dispatch: $FIX) => void
	setUsers: (users: $FIX) => void
	changePage: (number: number) => void
	getUsersTC: (currentPage: number, usersPerPortion: number) => (dispatch: $FIX) => void
}




const UsersAPIContainerWithHooks: FC<Props> = (props: Props) => {

	useEffect(() => {
		let currentPage: number = parsePageNumber(props.router.params.pageNumber)
		currentPage = parsePageNumber(props.router.params.pageNumber)
		props.getUsersTC(currentPage, props.usersPerPortion)
	}, [props.router.params.pageNumber]);


	const parsePageNumber = (value: string | undefined): number => {
		return value ? parseInt(value) : 1
	}
	const page: number = parsePageNumber(props.router.params.pageNumber);

	return <Users {...props} currentPage={page} changeFollowing={props.changeFollowing} />
}

export default UsersAPIContainerWithHooks
