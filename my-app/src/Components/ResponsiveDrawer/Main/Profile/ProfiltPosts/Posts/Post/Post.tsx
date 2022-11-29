import { Avatar, Box, Skeleton, Typography, SxProps, Theme } from "@mui/material";
import { width } from "@mui/system";
import CustomSceleton from "Components/Cmmon/CustomSkeleton";



interface Props {
	text: string
	imageUrl: string
	loading: boolean
}



const Post = (props: Props) => {
	const avatarStyle: SxProps<Theme> = { width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, mr: 2 }
	const textStyle: SxProps<Theme> = { p: { xs: 0.5, md: 1 } }
	const someLines = [1, 2, 3].map(number => { return <Skeleton key={number} sx={{ minWidth: '200px' }} /> });

	return (
		<>
			<Box sx={{ mt: 3, display: 'flex' }}>
				<CustomSceleton sx={avatarStyle} loading={props.loading} variant={'circular'} children={
					<Avatar
						alt="Remy Sharp"
						src={props.imageUrl}
						sx={avatarStyle}
					/>
				} />
				<Typography sx={textStyle}>
					{props.loading ? someLines : props.text}
				</Typography>
			</Box>
		</>
	);
}

export default Post;

