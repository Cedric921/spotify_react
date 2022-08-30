import { MoreVert, Favorite, Share } from '@mui/icons-material';
import {
	Card,
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Box,
	Modal,
	styled,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { SingleTrackType } from '../types/tracks.type';

type SongType = {
	track: SingleTrackType;
	// key: number;
	setTrack: React.Dispatch<React.SetStateAction<SingleTrackType | null>>;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Song = ({ track, setTrack, setOpenModal }: SongType) => {
	return (
		<Card
			// key={key}
			sx={{
				width: '30%',
				maxWidth: 345,
				minWidth: 300,
				boxShadow: 5,
				margin: 1,
			}}
			onClick={() => {
				setTrack(track);
				setOpenModal(true);
			}}
		>
			<CardHeader
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
				{track.popularity}
				<IconButton aria-label='add to favorites'>
					<Favorite />
				</IconButton>
				<IconButton aria-label='share'>
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Song;
