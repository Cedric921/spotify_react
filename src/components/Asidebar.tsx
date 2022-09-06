import { Album, Group, Home } from '@mui/icons-material';
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
	Stack,
	Avatar,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)({
	height: '100%',
	width: '20%',
});

const StyledStack = styled(Stack)({
	height: '100vh',
});

const StyledLink = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
	color: theme.palette.text.primary,
	width: '100%',
}));

const Asidebar = () => {
	return (
		<StyledStack
			flex={1}
			bgcolor={'Background.secondary'}
			color={'text.primary'}
			sx={{ display: { xs: 'none', sm: 'flex' } }}
		>
			<StyledBox position='fixed' color={'text.primary'}>
				<List>
					<ListItem disablePadding sx={{ color: "text.primary", width: "100%"}}>
						<StyledLink to='/'>
							<ListItemButton component='span'>
								<ListItemIcon>
									<Avatar>
										<Home />
									</Avatar>
								</ListItemIcon>
								<ListItemText primary='Search' color='red' />
							</ListItemButton>
						</StyledLink>
					</ListItem>
					<ListItem disablePadding>
						<StyledLink to='/album'>
							<ListItemButton component='span'>
								<ListItemIcon>
									<Avatar>
										<Album />
									</Avatar>
								</ListItemIcon>
								<ListItemText primary='Album' />
							</ListItemButton>
						</StyledLink>
					</ListItem>
					<ListItem disablePadding>
						<StyledLink to='/album'>
							<ListItemButton component='span'>
								<ListItemIcon>
									<Avatar>
										<Group />
									</Avatar>
								</ListItemIcon>
								<ListItemText primary='Artists' />
							</ListItemButton>
						</StyledLink>
					</ListItem>
				</List>
			</StyledBox>
		</StyledStack>
	);
};

export default Asidebar;
