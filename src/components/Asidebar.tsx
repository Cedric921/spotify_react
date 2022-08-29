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
	height: '100%',
	backgroundColor: 'rgb(255, 238, 238)',
});



const Asidebar = ({ mode, setMode }: AsideType) => {
	return (
		<StyledBox
			flex={1}
			bgcolor={'Background.default'}
			color={'text.primary'}
			height={300}
		>
			<StyledBox
				position='fixed'
				bgcolor={'background.default'}
				color={'text.primary'}
				width={100}
				height={100}
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
				</List>
			</StyledBox>
		</StyledBox>
	);
};

export default Asidebar;
