import { MoreVert } from '@mui/icons-material';
import {
	Card,
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	styled,
	Box,
	Modal,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';
import { SingleTrackType, SongsType } from '../types/tracks.type';

type SongType = {
	track: SingleTrackType;
	setTrack: React.Dispatch<React.SetStateAction<SongsType>>;
};

const CustomModal = styled(Modal)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

const Song = ({ track, setTrack }: SongType) => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<Card
				sx={{
					width: '25%',
					maxWidth: 245,
					minWidth: 200,
					boxShadow: 15,
					margin: 1,
					fontSize: 10,
				}}
				onClick={() => {
					setTrack(track);
					setOpenModal(true);
				}}
			>
				<CardHeader
					fontSize={10}
					avatar={
						<Avatar sx={{ bgcolor: grey[500] }} aria-label='recipe'>
							{track.name.split('')[0]}
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVert />
						</IconButton>
					}
					title={track.name}
					subheader={track.release_date}
				/>
				<CardMedia
					component='img'
					height='194'
					image={track.album.images[0].url}
					alt={track.name}
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						{track.name}
					</Typography>
				</CardContent>
				<CardActions>
					<Typography>{track.popularity} popylarity</Typography>
				</CardActions>
			</Card>
			<CustomModal
				open={openModal}
				onClose={() => {
					setOpenModal(false);
				}}
				aria-labelledby=''
				aria-describedby=''
			>
				<Box
					width={500}
					height={380}
					p={0}
					bgcolor={'background.default'}
					color={'text.primary'}
					borderRadius={4}
					justifyContent='center'
					alignItems='center'
				>
					<iframe
						style={{ borderRadius: '12px' }}
						src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
						width='100%'
						height='100%'
						frameBorder='0'
						allowFullScreen={true}
						allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
						loading='lazy'
					></iframe>
				</Box>
			</CustomModal>
		</>
	);
};

export default React.memo(Song);
