import React, { useContext } from 'react';
import { Card, Box, Typography, CardMedia } from '@mui/material';
import { AlbumType } from '../types/tracks.type';
import { ThemeContext } from '../context/ThemeContext';
import { TracksContext } from '../context/TracksContext';

type SingleAlbumType = {
	album: AlbumType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Album: React.FC<any> = ({ album }: SingleAlbumType) => {
	const { myTheme } = useContext(ThemeContext);
	const { setPlay } = useContext(TracksContext);

	return (
		<Box
			onClick={() => {
				setPlay({ id: album.id, type: 'album' });
			}}
			sx={{
				textAlign: 'center',
				marginBottom: '20px',
				background: myTheme == 'dark' ? '#121212' : '#ebebeb',
				borderRadius: 8,
				boxShadow:
					myTheme == 'dark'
						? '0px 0px 5px  rgba(255,255,255,0.25)'
						: '0px 0px 5px  #2b2a2a3e',
				padding: '15px',
				margin: '5px',
				color: 'black',
			}}
		>
			<Card
				sx={{
					maxWidth: 245,
					minWidth: 200,
					height: 200,

					boxShadow: 10,
					margin: 0,
					fontSize: 10,
					borderRadius: 8,
				}}
			>
				<CardMedia
					component='img'
					height='194'
					image={album && album.images && album.images[0].url}
					alt={album.name}
					sx={{ height: '100%' }}
				/>
				<Typography
					variant='body2'
					color='text.primary'
					width={35}
					height={35}
					sx={{
						position: 'relative',
						top: '-50px',
						right: '-150px',
						backgroundColor: '#39618bc7',
						color: 'black',
						fontSize: 18,
						borderRadius: 2,
						textAlign: 'center',
						fontWeight: 700,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{album.total_tracks}
				</Typography>
			</Card>
			<Typography variant='body2' color='text.secondary' marginTop={1}>
				{album.name && album.name.substring(0, 20)}
			</Typography>
			<Typography variant='body2' color='text.secondary' marginTop={1}>
				{album.artists &&
					album.artists.map((artist) => '*' + artist?.name.substring(0, 20))}
			</Typography>
		</Box>
	);
};

export default Album;
