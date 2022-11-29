import { Box, TextField, Typography } from '@mui/material';
import CustomSceleton from 'Components/Cmmon/CustomSkeleton';
import React, { useState, FC } from 'react';
import { $FIX } from 'types/types';



interface Props {
	status: string | null
	isStatusEditable: boolean
	loading: boolean
	updateStatus: (status: string | null) => (dispatch: $FIX) => void
}


const ProfileStatusWithHooks: FC<Props> = (props: Props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		if (props.isStatusEditable) {
			setEditMode(true);
		}
	}

	const deActivateEditMode = () => {
		if (props.isStatusEditable) {
			setEditMode(false);
			props.updateStatus(status);
		}
	}

	const changeLocalStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value)
	}

	const textStyle = { fontWeight: 400, width: '100%', }

	const handleKeyPress = (e: $FIX) => { //доделать эту хуйню потом, сейчас это не важно, потому что blur на Enter - это просто хотелка
		if (e.key === 'Enter') {
			e.target.blur();
		}
	}

	return (
		<>
			<CustomSceleton variant={"rectangular"} loading={props.loading} children={
				<Box sx={{
					mt: 1,
					width: '100%',
					maxWidth: 400,
					height: 32
				}}>
					{(editMode && props.isStatusEditable) &&
						<TextField
							id="outlined-basic"
							variant="standard"
							size="small"
							autoFocus={true}
							value={status}
							onChange={changeLocalStatus}
							onBlur={deActivateEditMode}
							onKeyPress={e => handleKeyPress(e)}
							sx={textStyle}
						/>}
					{!editMode &&
						<Typography
							component='p'
							variant="h6"
							onDoubleClick={activateEditMode}
							sx={textStyle}
						>
							{props.status}
						</Typography>}
				</Box>
			} />
		</>
	);
}

export default ProfileStatusWithHooks;