import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import { Box, createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { Stack } from '@mui/system';

//  a add routing to app, with --home --login --song

// create  context for user auth

const App: React.FC = () => {
	const [mode, setMode] = useState<PaletteMode>('dark');
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
				<Home mode={mode} setMode={setMode}/>
		</ThemeProvider>
	);
};

export default App;
