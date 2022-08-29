import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import Home from './pages/Home';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import TracksContextProvider from './context/TracksContext';
import { GoogleContext } from './context/GoogleContext';
import LoginPage from './pages/Login';

//  a add routing to app, with --home --login --song

// create  context for user auth

const App: React.FC = () => {
	const [mode, setMode] = useState<PaletteMode>('light');
	const { user, init, checkUser } = useContext(GoogleContext);
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	useEffect(() => {
		if (!checkUser()) init();
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<TracksContextProvider>
				{user.email !== '' ? (
					<Home mode={mode} setMode={setMode} />
				) : (
					<LoginPage />
				)}
			</TracksContextProvider>
		</ThemeProvider>
	);
};

export default App;
