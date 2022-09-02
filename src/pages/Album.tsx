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
import { Grid } from '@mui/material';

// display adbum from context
const AlbumsPage = () => {
	const { getApi, searchTrackFromRapid } = useContext(TracksContext);

	useEffect(() => {
		searchTrackFromRapid();
		getApi();
	}, []);

	return (
		<Stack
			justifyContent='space-between'
			alignItems='stretch'
			direction='row'
			spacing={2}
			bgcolor={'background.default'}
			color={'text.primary'}
		>
			<Asidebar />
			{/* <SongsPage /> */}
         <Grid justifyContent='center' alignItems='center' height='100%' bgcolor='primary'>
            <h2>album</h2>
         </Grid>
		</Stack>
	);
};

export default AlbumsPage;
