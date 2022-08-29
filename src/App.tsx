import './App.css';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Home from './pages/Home';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import TracksContextProvider from './context/TracksContext';

//  a add routing to app, with --home --login --song

// create  context for user auth

const App: React.FC = () => {
	const [mode, setMode] = useState<PaletteMode>('dark');
	const [user, setUser] = useState(null);
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	const handleCallbackResponse = (response: any) => {
		console.log('Encoded JWT ID token :', response.credential);
		const userObject = jwt_decode(response.credential);
		setUser(userObject);
		console.log(userObject);
		// document.getElementById('googleSignInButton')?.hidden = true,
	};

	useEffect(() => {
		/** global google */
		google.accounts.id.initialize({
			client_id:
				'168229458088-7nheosjmbhhehtmkc4qrlfq3e0soajqr.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});
		google.accounts.id.renderButton(
			document.getElementById('googleSignInButton'),
			{ theme: 'outline', size: 'large' }
		);
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<TracksContextProvider>
				{user == null && <div id='googleSignInButton'></div>}
				{user && (
					<>
						<img src={user.picture} alt={user.name} width={100} height={100}/>
						<Home mode={mode} setMode={setMode} />
					</>
				)}
			</TracksContextProvider>
		</ThemeProvider>
	);
};

export default App;
