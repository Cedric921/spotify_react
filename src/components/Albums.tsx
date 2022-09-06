import React, { useContext } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Album from './Album';
import { TracksContext } from '../context/TracksContext';


const Albums = () => {
	const { albums, searchInput } = useContext(TracksContext);
	return (
		<Box flex={4} bgcolor={'background.primary'} color={'text.primary'}>
			<Typography variant='h3' textAlign='start' margin={4}>
				Albums - {searchInput}
			</Typography>
			<Grid
				container
				justifyContent='center'
				spacing={3}
				flexWrap='wrap'
				gap={'15px'}
			>
				{albums && albums.map((album, i) => <Album album={album} key={i} />)}
			</Grid>
		</Box>
	);
};

export default Albums;
