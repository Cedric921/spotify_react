import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { GoogleContext } from '../context/GoogleContext';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomBox = styled(Box)(({ theme }) => ({
	width: '100vw',
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	background: 'linear-gradient(to bottom, #4b2727, #17173a)',
}));

const LoginPage: React.FC = () => {
	const { user } = useContext(GoogleContext);

	return (
		<>
			{user.email == '' ? (
				<CustomBox>
					<div id='googleSignInButton'></div>
				</CustomBox>
			) : (
				<Navigate to='/' replace/>
			)}
		</>
	);
};

export default LoginPage;
