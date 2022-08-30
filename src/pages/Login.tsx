import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CustomBox = styled(Box)(({ theme }) => ({
	width: '100vw',
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	background: 'linear-gradient(to bottom, #4b2727, #17173a)',
}));

const LoginPage: React.FC = () => {

	return (
		<CustomBox>
			<div id='googleSignInButton'></div>
		</CustomBox>
	);
};

export default LoginPage;
