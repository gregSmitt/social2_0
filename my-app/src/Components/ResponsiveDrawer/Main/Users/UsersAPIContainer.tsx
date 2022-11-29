import { $FIX, routerType } from 'types/types';
import React from 'react';
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




export default class UsersAPIContainer extends React.Component<Props, $FIX> {

	currentPage: number = this.parsePageNumber(this.props.router.params.pageNumber)

	componentDidMount(): void {
		this.getUsers();
	}

	componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<any>, snapshot?: any): void {
		if (prevProps.router.params.pageNumber !== this.props.router.params.pageNumber) {
			this.currentPage = this.parsePageNumber(this.props.router.params.pageNumber)
			this.getUsers();
		}
	}

	getUsers() {
		this.props.getUsersTC(this.currentPage, this.props.usersPerPortion);
	}

	parsePageNumber(value: string | undefined): number {
		return value ? parseInt(value) : 1
	}


	render() {
		return <Users {...this.props} currentPage={this.currentPage} changeFollowing={this.props.changeFollowing} />
	}
}


