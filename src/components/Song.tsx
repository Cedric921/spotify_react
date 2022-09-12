import {
	Card,
	CardHeader,
	Avatar,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React, {  useContext } from 'react';
import { SingleTrackType, SongsType } from '../types/tracks.type';
import { TracksContext } from '../context/TracksContext';

type SongType = {
	track: SingleTrackType;
	setTrack: React.Dispatch<React.SetStateAction<SongsType>>;
};


const Song = ({ track }: SongType) => {
	const { setPlay } = useContext(TracksContext);
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
					setPlay({ id: track.id, type: 'track' });
				}}
			>
				<CardHeader
					fontSize={10}
					avatar={
						<Avatar sx={{ bgcolor: grey[500] }} aria-label='recipe'>
							{track.name.split('')[0]}
						</Avatar>
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

		</>
	);
};

export default React.memo(Song);
