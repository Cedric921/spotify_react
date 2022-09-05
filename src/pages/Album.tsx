import { Stack } from '@mui/system';
import React, { useState, useEffect, useContext } from 'react';
import Asidebar from '../components/Asidebar';
import Navbar from '../components/Navbar';
import SongsPage from '../components/Songs';
import { Navigate } from 'react-router-dom';

//context
import { TracksContext } from '../context/TracksContext';
import Albums from '../components/Albums';
import { Grid } from '@mui/material';

// display adbum from context
const AlbumsPage = () => {
	const { getApi } = useContext(TracksContext);

	useEffect(() => {
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
			{/* <Grid
            flex={4}
				justifyContent='center'
				alignItems='center'
				height='100%'
				bgcolor='primary'
			> */}
			<Albums />
			{/* </Grid> */}
		</Stack>
	);
};

export default AlbumsPage;
