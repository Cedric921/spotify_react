import { Search } from '@mui/icons-material';
import { Box, Button, InputBase, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState, useEffect, useContext } from 'react';
import Asidebar from '../components/Asidebar';
import Navbar from '../components/Navbar';
import SongsPage from '../components/Songs';
import { TracksContext } from '../context/TracksContext';

import { HomeType } from '../types/tracks.type';

// display songs from context
const CLIENT_ID = '873b382d84e242f7be31abf9f91bd0a2';
const CLIENT_SECRET = '174f7831a4c243fd9a92577d3a6413c9';

// display adbum from context
const HomePage = ({ mode, setMode }: HomeType) => {
	const [searchInput, setsearchInput] = useState('gims');
	const [accesToken, setAccesToken] = useState('-');
	const [tracks, setTracks] = useState();

	const { getApi } = useContext(TracksContext);

	useEffect(() => {

		getApi()
		// const fetchSongs = async () => {
		// 	const params = {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/x-www-form-urlencoded',
		// 		},
		// 		body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
		// 	};
		// 	try {
		// 		// get API token
		// 		const res = await fetch(
		// 			`https://accounts.spotify.com/api/token`,
		// 			params
		// 		);
		// 		const data = await res.json();
		// 		if (data.access_token) setAccesToken(data.access_token);

		// 		searchTracks();
		// 	} catch (e: any) {
		// 		console.error(e.message);
		// 	}
		// };
		// fetchSongs();
	}, []);

	console.log(accesToken);

	// const searchTracks = async () => {
	// 	console.log('searching');
	// 	const params = {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Authorization: 'Bearer ' + accesToken,
	// 		},
	// 	};

	// 	try {
	// 		const response = await fetch(
	// 			`https://api.spotify.com/v1/search?q=${searchInput}&type=album,track`,
	// 			params
	// 		);
	// 		const data = await response.json();
	// 		setTracks(data.tracks);
	// 	} catch (err: any) {
	// 		console.log(err.message);
	// 	}
	// };

	return (
		<>
			<Navbar
				// search={searchTracks}
				// setSearchInput={setsearchInput}
			/>
			<Stack
				justifyContent='space-between'
				direction='row'
				spacing={2}
				bgcolor={'background.default'}
				color={'text.primary'}
			>
				<Asidebar mode={mode} setMode={setMode} />
				<SongsPage />
			</Stack>
		</>
	);
};

export default HomePage;
