import { Navigate } from "react-router-dom";

interface Props {
	isLogined: boolean
}

export default function redirectToLogin(Component: React.ElementType) {
	function ComponentredirectToLoginProp(props: Props) {
		if (props.isLogined) {
			return (
				<Component
					{...props}
				/>
			);
		} else {
			return <Navigate to={'/login'} />
		}
	}

	return ComponentredirectToLoginProp;
}
