import { Skeleton, SxProps, Theme } from '@mui/material';
import { $FIX } from 'types/types';




interface SkeletonProps {
	loading: boolean
	children: $FIX
	variant?: "text" | "rectangular" | "rounded" | "circular" | undefined
	sx?: SxProps<Theme>
}

const CustomSceleton = (props: SkeletonProps) => {
	const variant = (props.variant) ? props.variant : undefined;
	if (props.loading) {
		return (
			<Skeleton sx={{ ...props.sx }} variant={variant}>
				{props.children}
			</Skeleton>
		);
	} else return <>{props.children}</>
}

export default CustomSceleton;