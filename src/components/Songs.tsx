import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
// import
import { TracksContext } from '../context/TracksContext';
import { SingleTrackType } from '../types/tracks.type';
import Song from './Song';

const SongsPage = () => {
	const { tracks, play, searchTracks, searchInput } = useContext(TracksContext);
	useEffect(() => {
		searchTracks(searchInput);
	}, []);

	return (
		<>
			<Box flex={4} bgcolor={'background.primary'} color={'text.primary'}>
				<Typography variant='h3' textAlign='start' margin={4}>
					Tracks - {searchInput}
				</Typography>
				{tracks ? (
					<>
						<Grid
							container
							justifyContent='center'
							spacing={3}
							flexWrap='wrap'
							sx={{ width: '100%' }}
						>
							{tracks.items?.map((track: SingleTrackType, i: number) => (
								<Song track={track} key={i} />
							))}
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
					</>
				) : (
					<Stack
						justifyContent='center'
						alignItems='center'
						height={100}
						sx={{
							width: '100%',
							height: '100%',
							bgcolor: 'background.primary',
						}}
					>
						<Box
							justifyContent='center'
							alignItems='center'
							sx={{ width: '100%', height: '100%' }}
						>
							<Typography variant='h3'>No song to show</Typography>
						</Box>
					</Stack>
				)}
			</Box>
		</>
	);
};

export default React.memo(SongsPage);
