import { ExpandMore, Favorite, MoreVert, Share } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

type SongsType = {
	tracks: {
		items: {
			name: string;
			href: string;
			release_date: string;
			album: { images: { height: number; url: string }[] };
		}[];
	};
};

const SongsPage: React.FC = ({ tracks }: SongsType) => {
	console.log(tracks);
	return (
		<Box flex={4}>
			<Typography>Last musics</Typography>

			<Grid container spacing={2}>
				{tracks &&
					tracks.items?.map((track, i) => (
						<Grid item xs={4} key={i}>
							<Card sx={{ maxWidth: 345 }}>
								<CardHeader
									avatar={
										<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
											R
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
										
									</Typography>
								</CardContent>
								<CardActions disableSpacing>
									<IconButton aria-label='add to favorites'>
										<Favorite />
									</IconButton>
									<IconButton aria-label='share'>
										<Share />
									</IconButton>
								</CardActions>
							</Card>
						</Grid>
					))}
			</Grid>
		</Box>
	);
};

export default React.memo(SongsPage);
