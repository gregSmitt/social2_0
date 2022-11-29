import { Box, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomSceleton from 'Components/Cmmon/CustomSkeleton';

interface Props {
	quantityOfPages: number
	currentPage: number | null
	changePage: (number: number) => void
	loading: boolean
}

const UsersPagination = (props: Props) => {

	const navigate = useNavigate();
	const changeUsersPageUrl = (page: number) => navigate(`/users/${page}`);

	const huita = (
		event: React.ChangeEvent<unknown>,
		page: number
	) => {
		changeUsersPageUrl(page);
	};

	const currentPage = (props.currentPage) ? props.currentPage : 1;

	const pagination = <Pagination page={currentPage} count={props.quantityOfPages} variant="outlined" onChange={huita} />;

	return (
		<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
			{/* <CustomSceleton loading={props.loading} children={pagination} variant={"rounded"} /> */}
			<Pagination page={currentPage} count={props.quantityOfPages} variant="outlined" onChange={huita} disabled={props.loading} />
		</Box>
	);
}



export default UsersPagination;

