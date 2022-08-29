import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

const CustomBox = styled(Box)(({ theme }) => ({
	width: '100vw',
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	background: 'linear-gradient(to bottom, #9a5454, #7070c7)',
}));

const LoginPage: React.FC = () => {
	return (
		<CustomBox>
			<div id='googleSignInButton'></div>
		</CustomBox>
	);
};

export default LoginPage;
