import React from 'react';
import { Box, Card, CardMedia } from '@mui/material';

const Album: React.FC<any> = () => {
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
		>
			<CardMedia component='img' height='194' image={''} alt={''} />
		</Card>
	);
};

export default Album;
