import './App.css';
import ResponsiveDrawer from './ResponsiveDrawer/ResponsiveDrawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}


interface Props {
}

const theme = createTheme({
	palette: {
		primary: {
			main: '#1F3140'
		},
	},
});


const App = (props: Props) => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<ResponsiveDrawer />
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}

export default App;