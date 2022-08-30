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
	Stack,
} from '@mui/material';
import React from 'react';
import { AsideType } from '../types/tracks.type';



const StyledBox = styled(Box)({
	height: '100%',
	width: '20%',
});

const StyledStack = styled(Stack)({
	height: '100vh',

});



const Asidebar = () => {
	return (
		<StyledStack
			flex={1}
			bgcolor={'Background.secondary'}
			color={'text.primary'}
			sx={{ display: { xs: 'none', sm: 'flex' } }}
		>
			<StyledBox
				position='fixed'
				color={'text.primary'}
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
		</StyledStack>
	);
};

export default Asidebar;
