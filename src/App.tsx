import './App.css';
import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, } from '@mui/material';
import TracksContextProvider from './context/TracksContext';
import { GoogleContext } from './context/GoogleContext';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar';
import AlbumsPage from './pages/Album';
import { ThemeContext } from './context/ThemeContext';

const App: React.FC = () => {
	const { myTheme } = useContext(ThemeContext);

	const { user, init, checkUser } = useContext(GoogleContext);
	const darkTheme = createTheme({
		palette: {
			mode: myTheme,
		},
	});

	useEffect(() => {
		if (!checkUser()) init();
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<TracksContextProvider>
				{!user ? (
					<Navigate to='/login' replace />
				) : (
					<>
						<Navbar />
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
