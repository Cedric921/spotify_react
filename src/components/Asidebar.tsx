import { Home, ModeNight } from '@mui/icons-material';
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
	styled,
} from '@mui/material';
import React from 'react';
import { AsideType } from '../types/tracks.type';



const StyledBox = styled(Box)({
	height: '91vh',
});

const Asidebar = ({ mode, setMode }: AsideType) => {
	return (
		<StyledBox flex={1} bgcolor={'Background.default'} color={'text.primary'} height={300}>
			<Box
				position='fixed'
				bgcolor={'background.default'}
				color={'text.primary'}
				width={100}
			>
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
							onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}
						>
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</StyledBox>
	);
};

export default Asidebar;
