import React, { useContext } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Album from './Album';
import { TracksContext } from '../context/TracksContext';

const Albums = () => {
	const { albums, searchInput, play } = useContext(TracksContext);
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
					left: 0,
					right: 0,
					display: { xs: 'flex', sm: 'none' },
				}}
				>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						display: play.id !== '' ? 'flex' : 'none',
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
			</Box>
		</Box>
	);
};

export default Albums;
