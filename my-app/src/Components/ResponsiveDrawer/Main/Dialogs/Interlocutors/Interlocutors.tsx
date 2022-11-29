import { Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SimpleTable } from 'types/types';


interface Props {
	usersListWidth: number
	value: number
	handleChange: any
	interlocutors: SimpleTable
}

interface LinkTabProps {
	label?: string;
	href: string;
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

function LinkTab(props: LinkTabProps) {
	const navigate = useNavigate();

	const changeDialog = (href: string) => navigate(`/messages/${href}`);

	return (
		<Tab
			component="a"
			onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
				event.preventDefault();
				changeDialog(props.href);
			}}
			{...props}
		/>
	);
}



const Interlocutors = (props: Props) => {
	let linkTabs = props.interlocutors.map(user => <LinkTab label={user.name} href={user.userId} key={user.userId} />);
	return (

		<Tabs
			orientation="vertical"
			variant="scrollable"
			value={props.value}
			onChange={props.handleChange}
			aria-label="Vertical tabs example"
			sx={{
				borderRight: 1, borderColor: 'divider', width: props.usersListWidth, position: 'fixed', zIndex: 10, height: '100%'
			}}
		>
			{/* <LinkTab label="Woman" href="1" {...a11yProps(0)} />
			<LinkTab label="Item Two" href="2" {...a11yProps(1)} />
			<LinkTab label="Item Three" href="2" {...a11yProps(2)} />
			<LinkTab label="Item Four" href="2" {...a11yProps(3)} />
			<LinkTab label="Item Five" href="2" {...a11yProps(4)} />
			<LinkTab label="Item Six" href="2" {...a11yProps(5)} />
			<LinkTab label="Item Seven" href="2" {...a11yProps(6)} /> */}
			{linkTabs}
		</Tabs>
	);
}

export default Interlocutors;

