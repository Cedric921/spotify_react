import { Stack } from '@mui/system';
import React, { useEffect, useContext } from 'react';
import Asidebar from '../components/Asidebar';
import SongsPage from '../components/Songs';

//context
import { TracksContext } from '../context/TracksContext';

// display tracks  from context
const HomePage = () => {
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
			<SongsPage />
		</Stack>
	);
};

export default HomePage;
