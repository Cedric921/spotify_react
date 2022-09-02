import React from 'react';
import { Box, Grid, Typography, styled } from '@mui/material';
import Album from './Album';

const StyledTypography = styled(Typography)(({ theme }) => ({
	padding: '10px',
	color: '#d9f4ff',
	textShadow: '0px 0px 10px  #000000',
	// width: '100%',
}));
const Albums = () => {
	return (
		<Box flex={4} bgcolor={'background.primary'} color={'text.primary'}>
			<StyledTypography variant='h3' textAlign='center' margin={4}>
				last musics
			</StyledTypography>
			<Grid container justifyContent='center' spacing={3} flexWrap='wrap'>
				<Album />
				<Album />
				<Album />
				<Album />
				<Album />
				<Album />
				<Album />
				<Album />
				<Album />
			</Grid>
		</Box>
	);
};

export default Albums;
