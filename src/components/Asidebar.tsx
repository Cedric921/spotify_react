import { Home, ModeNight } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';

const Asidebar = () => {
	return (
		<Box flex={1}>
			<Box position='fixed'>
				<List>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary='Homepage' />
						</ListItemButton>
					</ListItem>
					
					
					<ListItem disablePadding>
						<ListItemButton
							component='a'
							href='#home'
							// onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}
						>
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Asidebar;
