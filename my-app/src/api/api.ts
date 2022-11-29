import { Logout } from '@mui/icons-material';
import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "53897041-cff0-4d09-83bb-9c0607f47c11"
	},
})

export const userAPI = {
	getUsers(currentPage: number, usersPerPortion: number) {
		return instance.get("users", {
			params: {
				page: currentPage,
				count: usersPerPortion,
			}
		});
	},
}

export const profileAPI = {
	followUser(id: number) {
		return instance.post(`follow/${id}`);
	},
	unfollowUser(id: number) {
		return instance.delete(`follow/${id}`);
	},
	getProfile(id: number) {
		return instance.get(`profile/${id}`);
	},
	getStatus(id: number) {
		return instance.get(`profile/status/${id}`);
	},
	updateStatus(status: string | null) {
		return instance.put(`profile/status`, {
			status: status
		});
	}
}

export const authAPI = {
	getAuthData() {
		return instance.get(`auth/me`);
	},
	logIn(email: string, password: string, rememberMe: boolean) {
		return instance.post(`/auth/login`, {
			email: email,
			password: password,
			rememberMe: rememberMe
		});
	},
	logOut() {
		return instance.delete(`/auth/login`);
	}
}




