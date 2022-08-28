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
import { SongsType } from '../types/tracks.type';

const SongsPage = ({ tracks }: SongsType) => {
	return (
		<Box flex={4} bgcolor={'background.primary'} color={'text.primary'}>
			{tracks ? (
				<Grid container spacing={2}>
					<Typography textAlign='center' fontSize='small'>
						Last musics
					</Typography>
					{tracks.items?.map((track, i) => (
						<Grid item xs={4} key={i}>
							<Card sx={{ maxWidth: 345, boxShadow: 5, margin: 1 }}>
								<CardHeader
									avatar={
										<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
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
									<Typography
										variant='body2'
										color='text.secondary'
									></Typography>
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
	);
};

export default React.memo(SongsPage);
