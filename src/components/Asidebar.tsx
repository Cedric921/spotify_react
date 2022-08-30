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
});

const StyledStack = styled(Stack)({
	height: '100vh',
});



const Asidebar = ({ mode, setMode }: AsideType) => {
	return (
		<StyledStack
			flex={1}
			bgcolor={'Background.secondary'}
			color={'text.primary'}
		>
			<StyledBox
				position='fixed'
				// bgcolor={'background.default'}
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
