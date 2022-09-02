import { Box, Grid, Modal, Stack, styled, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
// import
import { TracksContext } from '../context/TracksContext';
import { SingleTrackType, SongsType } from '../types/tracks.type';
import Song from './Song';

const CustomModal = styled(Modal)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

const SongsPage = () => {
	const [openModal, setOpenModal] = useState(false);
	const [track, setTrack] = useState<SongsType>({
		id: '',
		name: '',
		href: '',
		popularity: 0,
		release_date: '',
		album: { images: [{ height: 0, url: '' }] },
	});
	const { tracks, searchTracks, searchTrackFromRapid, song, searchInput } =
		useContext(TracksContext);
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
									searchTrackFromRapid={searchTrackFromRapid}
									setTrack={setTrack}
									setOpenModal={setOpenModal}
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
						sx={{ width: '100%', height: '100%', bgcolor: 'gray' }}
					>
						<Box>No song to show</Box>
					</Stack>
				)}
			</Box>
			<CustomModal
				open={openModal}
				onClose={() => {
					setOpenModal(false);
				}}
				aria-labelledby=''
				aria-describedby=''
			>
				<Box
					width={400}
					height={400}
					p={3}
					bgcolor={'background.default'}
					color={'text.primary'}
					borderRadius={4}
					justifyContent='center'
					alignItems='center'
				>
					<Typography
						variant='h6'
						textAlign='center'
						color='primary'
						paddingBottom={2}
					>
						{track?.name}
					</Typography>
					{song && song[0] && (
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<img
								src={`${song[0]?.album?.images[0].url}?w=400&h=164&fit=crop&auto=format`}
								srcSet={`${song[0]?.album?.images[0].url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
								alt={song[0]?.name}
								loading='lazy'
								width={'75%'}
							/>

							<ReactPlayer
								url={song[0].preview_url}
								width='100%'
								height={'50px'}
								// playIcon={<PlayArrow />}
								loop
								playing
								controls
							/>
						</Box>
					)}
				</Box>
			</CustomModal>
		</>
	);
};

export default React.memo(SongsPage);
