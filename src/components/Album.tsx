import React, { useState, useContext } from 'react';
import { Card, Box, Typography, styled, Modal, CardMedia } from '@mui/material';
import { AlbumType } from '../types/tracks.type';
import { ThemeContext } from '../context/ThemeContext';

const CustomModal = styled(Modal)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: 'none',
});

type SingleAlbumType = {
	album: AlbumType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Album: React.FC<any> = ({ album }: SingleAlbumType) => {
	const [openModal, setOpenModal] = useState(false);
	const { myTheme } = useContext(ThemeContext);

	return (
		<Box
			onClick={() => {
				setOpenModal(!openModal);
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
				onClick={() => {
					setOpenModal(true);
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
			<Typography variant='body2' color='text.secondary' marginTop={4}>
				{album.artists && album.artists.map((artist) => artist?.name)}
			</Typography>

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
		</Box>
	);
};

export default Album;
