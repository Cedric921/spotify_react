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
import { grey } from '@mui/material/colors';
import React, { useContext } from 'react';
import { TracksContext } from '../context/TracksContext';
import {  SingleTrackType } from '../types/tracks.type';

const SongsPage = (/*{ tracks }: SongsType*/) => {
	const { tracks } = useContext(TracksContext);
	return (
		<Box flex={4} bgcolor={'background.primary'} color={'text.primary'}>
			{tracks ? (
				<>
					<Typography variant='h4' textAlign='center' margin={4}>
						Last musics
					</Typography>
					<Grid
						container
						justifyContent='flex-end'
						spacing={2}
						flexWrap='wrap'
						sx={{ width: '100%' }}
					>
						{tracks.items?.map((track: SingleTrackType, i: number) => (
							<Card
								key={i}
								sx={{
									width: '30%',
									maxWidth: 345,
									minWidth: 300,
									boxShadow: 5,
									margin: 1,
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
							// <Grid
							// 	item
							// 	xs={4}
							// 	key={i}
							// 	sx={{ maxWidth: 345, minWidth: 300, boxShadow: 5, margin: 1 }}
							// >
							// </Grid>
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
	);
};

export default React.memo(SongsPage);
