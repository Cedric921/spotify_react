import { Box, Grid, Modal, Stack, styled, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
// import
import { TracksContext } from '../context/TracksContext';
import { SingleTrackType, SongsType } from '../types/tracks.type';
import Song from './Song';

const SongsPage = () => {
	// const [openModal, setOpenModal] = useState(false);
	const [track, setTrack] = useState<SongsType>({
		id: '',
		name: '',
		href: '',
		popularity: 0,
		release_date: '',
		album: { images: [{ height: 0, url: '' }] },
	});
	const { tracks, searchTracks, searchInput } = useContext(TracksContext);
	useEffect(() => {
		searchTracks(searchInput);
	}, []);

	const StyledTypography = styled(Typography)(({ theme }) => ({
		padding: '10px',
		color: '#d9f4ff',
		textShadow: '0px 0px 10px  #000000',
		// width: '100%',
	}));

	return (
		<>
			<Box flex={4} bgcolor={'background.primary'} color={'text.primary'}>
				<StyledTypography variant='h3' textAlign='center' margin={4}>
					last musics
				</StyledTypography>
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
								<Song
									track={track}
									setTrack={setTrack}
									// setOpenModal={setOpenModal}
									key={i}
								/>
							))}
						</Grid>
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
						<Typography variant='h3'>No song to show</Typography>
						<a
							href='https://www.flaticon.com/free-icons/loading'
							title='loading icons'
						>
							Loading icons created by Pixel perfect - Flaticon
						</a>
					</Stack>
				)}
			</Box>
		</>
	);
};

export default React.memo(SongsPage);
