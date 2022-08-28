import { Search } from '@mui/icons-material';
import { Box, Button, InputBase, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

// display songs from context
const CLIENT_ID = '873b382d84e242f7be31abf9f91bd0a2';
const CLIENT_SECRET = '174f7831a4c243fd9a92577d3a6413c9';

// display adbum from context
const HomePage: React.FC = () => {
	const [searchInput, setsearchInput] = useState('gims');
	const [accesToken, setAccesToken] = useState('');

	const params = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
	};

	useEffect(() => {
		// get API token
		fetch(`https://accounts.spotify.com/api/token`, params)
			.then((res) => res.json())
			.then((data) => setAccesToken(data.access_token));
	}, []);

	// console.log(accesToken);

	const search = async () => {
		console.log('searching')
		const params = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + accesToken,
			},
		};

		const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, params);
		const data = await response.json();

		console.log(data);
	};

	return (
		<Box flex={1}>
			<TextField
				id='outlined-basic'
				label='Outlined'
				variant='outlined'
				onChange={(e) => setsearchInput(e.target.value)}
				onKeyUp={(e) => {
					if (e.key === 'Enter') {
						console.log(searchInput);
						search();
					}
				}}
			/>
			<Button onClick={() => search()}>Search</Button>
		</Box>
	);
};

export default HomePage;
