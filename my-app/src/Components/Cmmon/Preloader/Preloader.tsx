import { Box, display, maxWidth } from '@mui/system';
import prloaderSvg from '../Picturies/Preloader.svg';

const Preloader = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', position: 'absolute' }}>
			<Box sx={{ maxWidth: '200px' }}>
				<img src={prloaderSvg} alt=""></img>
			</Box>
		</Box>
	)
}

export default Preloader