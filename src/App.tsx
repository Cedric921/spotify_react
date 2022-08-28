import './App.css';
import React from 'react';
import Home from './pages/Home';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

//  a add routing to app, with --home --login --song

// create  context for user auth

const App: React.FC = () => {
	return (
		<>
				<Home />
		</>
	);
};

export default App;
