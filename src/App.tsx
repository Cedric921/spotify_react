import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Home from './pages/Home';
import {
	Box,
	createTheme,
	PaletteMode,
	styled,
	ThemeProvider,
} from '@mui/material';
import TracksContextProvider from './context/TracksContext';
import GoogleContextProvider, { GoogleContext } from './context/GoogleContext';
import { UserType } from './types/tracks.type';

//  a add routing to app, with --home --login --song

// create  context for user auth

const App: React.FC = () => {
	const [mode, setMode] = useState<PaletteMode>('light');
	const { user, init } = useContext(GoogleContext);
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	const CustomBox = styled(Box)(({ theme }) => ({
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'linear-gradient(to bottom, #9a5454, #7070c7)',
	}));

	useEffect(() => {
		init();
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<TracksContextProvider>
				{user.email !== '' ? (
					<Home mode={mode} setMode={setMode} />
				) : (
					<CustomBox>
						<div id='googleSignInButton'></div>
					</CustomBox>
				)}
			</TracksContextProvider>
		</ThemeProvider>
	);
};

export default App;
