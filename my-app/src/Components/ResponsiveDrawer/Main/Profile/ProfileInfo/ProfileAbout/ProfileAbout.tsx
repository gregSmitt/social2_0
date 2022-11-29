import { List, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import StringAbout from './StringAbout/StringAbout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface Props {
	loading: boolean
}

const ListItems = (props: Props) => {
	return (
		<>
			<StringAbout pointName='position' pointInfo='cleaner' {...props} />
			<StringAbout pointName='city' pointInfo='New York' {...props} />
			<StringAbout pointName='cum' pointInfo='Nizhnezalupinsky State University' {...props} />
			<StringAbout pointName='Web Site' pointInfo='Web.what?' {...props} />
		</>
	);
}

const ProfileAbout = (props: Props) => {
	return (
		<>
			<Accordion disableGutters={true} sx={{ display: { xs: 'block', sm: 'none' } }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography sx={{ fontSize: '1.25rem' }}>Information</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List dense={true}>
						<ListItems {...props} />
					</List>
				</AccordionDetails>
			</Accordion>


			<List dense={true} sx={{ display: { xs: 'none', sm: 'block' } }}>
				<ListItems {...props} />
			</List>
		</>
	);
}

export default ProfileAbout;

