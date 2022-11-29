import { Box, Typography } from "@mui/material";
import { FC } from "react";

const NotFound: FC = () => {
	return (
		<>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', position: 'absolute', flexDirection: 'column' }}>
				<Typography variant="h1" component={'h2'}>404</Typography>
				<Typography variant="h2" component={'h1'}>Page is not found</Typography>
			</Box>
		</>
	);
}

export default NotFound;