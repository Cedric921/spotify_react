import { Stack } from '@mui/system';
import React, { useEffect, useContext } from 'react';
import Asidebar from '../components/Asidebar';

//context
import { TracksContext } from '../context/TracksContext';
import Albums from '../components/Albums';

// display album from context
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
			<Albums />
		</Stack>
	);
};

export default AlbumsPage;
