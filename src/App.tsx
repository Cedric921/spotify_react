import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import TracksContextProvider from './context/TracksContext';
import { GoogleContext } from './context/GoogleContext';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar';
import AlbumsPage from './pages/Album';

const App: React.FC = () => {
	const [mode, setMode] = useState<PaletteMode>('dark');
	const { user, init, checkUser } = useContext(GoogleContext);
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	useEffect(() => {
		
		if (!checkUser()) init();
		console.log(user.email);
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<TracksContextProvider>
				{!user ? (
					<Navigate to='/login' replace />
				) : (
					<>
						<Navbar mode={mode} setMode={setMode} />
						<Routes>
							<Route path='/login' element={<LoginPage />} />
							<Route path='/album' element={<AlbumsPage />} />
							<Route path='/' element={<Home />} />
						</Routes>
					</>
				)}
			</TracksContextProvider>
		</ThemeProvider>
	);
};

export default App;
