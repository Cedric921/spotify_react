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
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TracksContext } from '../context/TracksContext';

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
	const { play } = useContext(TracksContext);
	return (
		<StyledStack
			flex={1}
			bgcolor={'Background.secondary'}
			color={'text.primary'}
			sx={{ display: { xs: 'none', sm: 'flex' } }}
		>
			<StyledBox position='fixed' color={'text.primary'}>
				<List>
					<ListItem
						disablePadding
						sx={{ color: 'text.primary', width: '100%' }}
					>
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
				<Box
					p={0}
					bgcolor={'background.default'}
					color={'text.primary'}
					borderRadius={4}
					justifyContent='center'
					alignItems='center'
					sx={{
						width: '100%',
						height: '400px',
						display: play.id === '' ? 'none' : 'flex',
					}}
				>
					<iframe
						style={{ borderRadius: '12px' }}
						src={`https://open.spotify.com/embed/${play.type}/${play.id}?utm_source=generator`}
						width='100%'
						height='100%'
						frameBorder='0'
						allowFullScreen={true}
						allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
						loading='lazy'
					></iframe>
				</Box>
			</StyledBox>
		</StyledStack>
	);
};

export default Asidebar;
