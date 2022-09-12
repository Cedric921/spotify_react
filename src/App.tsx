import './App.css';
import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, Box } from '@mui/material';
import TracksContextProvider, { TracksContext } from './context/TracksContext';
import { GoogleContext } from './context/GoogleContext';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar';
import AlbumsPage from './pages/Album';
import { ThemeContext } from './context/ThemeContext';

const App: React.FC = () => {
	const { myTheme } = useContext(ThemeContext);
	const { play } = useContext(TracksContext);

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
						<Box
							p={0}
							bgcolor={'background.default'}
							color={'text.primary'}
							borderRadius={0}
							justifyContent='center'
							alignItems='center'
							sx={{
								width: '100%',
								height: '80px',
								position: 'fixed',
								bottom: 0,
								display: { xs: 'flex', sm: 'none' },
							}}
						>
							<iframe
								style={{ borderRadius: '12px' }}
								src={`https://open.spotify.com/embed/${play.type}/${play.id}?utm_source=generator`}
								width='100%'
								height='100%'
								frameBorder='0'
								allowFullScreen={true}
								allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
								loading='lazy'
							></iframe>
						</Box>
					</>
				)}
			</TracksContextProvider>
		</ThemeProvider>
	);
};

export default App;
