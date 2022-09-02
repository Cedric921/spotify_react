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
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { SingleTrackType, SongsType } from '../types/tracks.type';

type SongType = {
	track: SingleTrackType;
	setTrack: React.Dispatch<React.SetStateAction<SongsType>>;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	searchTrackFromRapid: (id?: string) => Promise<void>;
};



const Song = ({
	track,
	setTrack,
	searchTrackFromRapid,
	setOpenModal,
}: SongType) => {
	return (
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
				console.log(track.id);
				searchTrackFromRapid(track.id);
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
	);
};

export default React.memo(Song);
