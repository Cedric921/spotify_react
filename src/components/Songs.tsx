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
	Modal,
	Stack,
	styled,
	Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useContext, useState } from 'react';
import { TracksContext } from '../context/TracksContext';
import { SingleTrackType } from '../types/tracks.type';
import Song from './Song';

const CustomModal = styled(Modal)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

const SongsPage = (/*{ tracks }: SongsType*/) => {
	const [openModal, setOpenModal] = useState(false);
	const [track, setTrack] = useState<SingleTrackType | null>(null);
	const { tracks } = useContext(TracksContext);
	return (
		<>
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
								<Song
									track={track}
									setTrack={setTrack}
									setOpenModal={setOpenModal}
									key={i}
								/>
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
			<CustomModal
				open={openModal}
				onClose={() => setOpenModal(false)}
				aria-labelledby=''
				aria-describedby=''
			>
				<Box
					width={400}
					height={280}
					p={3}
					bgcolor={'background.default'}
					color={'text.primary'}
					borderRadius={4}
				>
					<Typography variant='h6' textAlign='center' color='gray'>
						{track?.name}
					</Typography>
				</Box>
			</CustomModal>
		</>
	);
};

export default React.memo(SongsPage);
