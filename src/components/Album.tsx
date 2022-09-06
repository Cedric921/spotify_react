import React, { useState } from 'react';
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Modal,
	styled,
	Typography,
} from '@mui/material';
import { Audiotrack, MoreVert } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { AlbumType } from '../types/tracks.type';

const CustomModal = styled(Modal)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

type SingleAlbumType = {
	album: AlbumType;
};

const Album: React.FC<any> = ({ album }: SingleAlbumType) => {
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
					console.log(album.images[0].url);
					setOpenModal(true);
				}}
			>
				<CardHeader
					fontSize={10}
					avatar={
						<Avatar sx={{ bgcolor: grey[500] }} aria-label='recipe'>
							{album.name.split('')[0]}
						</Avatar>
					}
					title={album?.name.substring(0, 15)}
					subheader={album.release_date}
				/>
				<CardMedia
					component='img'
					height='194'
					image={album && album.images && album.images[0].url}
					alt={album.name}
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						{album.artists && album.artists.map((artist) => artist?.name)}
					</Typography>
				</CardContent>
				<CardActions>
					<Typography variant='h6' color='text.secondary'>
						{album.total_tracks}
					</Typography>
					<Audiotrack />
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
					height={500}
					p={0}
					bgcolor={'background.default'}
					color={'text.primary'}
					borderRadius={4}
					justifyContent='center'
					alignItems='center'
				>
					<iframe
						style={{ borderRadius: '12px' }}
						src={`https://open.spotify.com/embed/album/${album.id}?utm_source=generator`}
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

export default Album;
