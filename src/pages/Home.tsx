import { Stack } from '@mui/system';
import React, { useState, useEffect, useContext } from 'react';
import Asidebar from '../components/Asidebar';
import Navbar from '../components/Navbar';
import SongsPage from '../components/Songs';
import { Navigate } from 'react-router-dom';

//context
import { TracksContext } from '../context/TracksContext';
import { GoogleContext } from '../context/GoogleContext';

import { HomeType } from '../types/tracks.type';

// display songs from context
const CLIENT_ID = '873b382d84e242f7be31abf9f91bd0a2';
const CLIENT_SECRET = '174f7831a4c243fd9a92577d3a6413c9';

// display adbum from context
const HomePage = ({ mode, setMode }: HomeType) => {
	const { getApi, searchTrackFromRapid } = useContext(TracksContext);
	const { user } = useContext(GoogleContext);

	useEffect(() => {
		searchTrackFromRapid();
		getApi();
	}, []);

	return (
		<>
			{user.email == '' ? (
				<Navigate to='/login' replace />
			) : (
				<>
					<Navbar mode={mode} setMode={setMode} />
					<Stack
						justifyContent='space-between'
						alignItems='stretch'
						direction='row'
						spacing={2}
						bgcolor={'background.default'}
						color={'text.primary'}
					>
						<Asidebar />
						<SongsPage />
					</Stack>
				</>
			)}
		</>
	);
};

export default HomePage;
