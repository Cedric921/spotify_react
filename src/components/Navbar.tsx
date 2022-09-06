import {
	LightMode,
	Logout,
	ModeNight,
	Search,
	Group,
	Album,
	HomeOutlined,
} from '@mui/icons-material';
import {
	AppBar,
	InputBase,
	styled,
	Toolbar,
	Box,
	Typography,
	Avatar,
	Menu,
	MenuItem,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { GoogleContext } from '../context/GoogleContext';
import { ThemeContext } from '../context/ThemeContext';
import { TracksContext } from '../context/TracksContext';
import { AsideType } from '../types/tracks.type';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const SearchBar = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	color: 'grey',
	width: '40%',
	maxWidth: '400px',
	display: 'flex',
	alignItem: 'center',
}));

const Icons = styled(Box)(({ theme }) => ({
	backgroundColor: 'transparent',
	display: 'none',
	alignItems: 'center',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	backgroundColor: 'transparent',
	display: 'flex',
	alignItems: 'center',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

const CustomLink = styled(Link)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	color: theme.palette.text.primary,
	textDecoration: 'none',
}));

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const { myTheme, setMyTheme } = useContext(ThemeContext);
	const { user, logout } = useContext(GoogleContext);
	const { searchTracks, searchInput, setSearchInput } =
		useContext(TracksContext);

	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography>Music search</Typography>
				<SearchBar>
					<InputBase
						sx={{ color: 'black' }}
						placeholder='Search track'
						fullWidth
						onChange={(e) => {
							setSearchInput(e.target.value);
							searchTracks(searchInput);
						}}
						onKeyUp={(e) => {
							if (e.key === 'Enter') {
								searchTracks(searchInput);
							}
						}}
					/>
					<Search width='200px' height='100%' />
				</SearchBar>
				<Icons>
					{myTheme == 'dark' ? (
						<LightMode color='info' onClick={() => setMyTheme('light')} />
					) : (
						<ModeNight onClick={() => setMyTheme('dark')} />
					)}
					<Typography>{user.name && user.name}</Typography>
					<Avatar
						src={user.picture && user.picture}
						alt='Avatar'
						sx={{ width: 30, height: 30 }}
						onClick={() => setOpenMenu(!openMenu)}
					/>
				</Icons>
				<UserBox>
					<Avatar
						src={user.picture && user.picture}
						alt='Avatar'
						sx={{ width: 30, height: 30 }}
						onClick={() => setOpenMenu(!openMenu)}
					/>
				</UserBox>
			</StyledToolbar>
			<Menu
				id='demo-menu'
				aria-labelledby='demo-menu'
				// anchorEl={el}
				open={openMenu}
				onClose={() => setOpenMenu(false)}
				// anchorEl={() => undefined}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<MenuItem
					onClick={() => {
						logout();
						<Navigate to='/login' />;
					}}
				>
					<Logout sx={{ marginRight: 2 }} />
					Log out
				</MenuItem>
				<MenuItem>
					<CustomLink to='/'>
						<HomeOutlined sx={{ marginRight: 2 }} />
						Home
					</CustomLink>
				</MenuItem>
				<MenuItem>
					<CustomLink to='/album'>
						<Album sx={{ marginRight: 2 }} />
						Albums
					</CustomLink>
				</MenuItem>
				<MenuItem>
					<CustomLink to='/album'>
						<Group sx={{ marginRight: 2 }} />
						Artists
					</CustomLink>
				</MenuItem>
				<MenuItem
					onClick={() => setMyTheme(myTheme == 'dark' ? 'light' : 'dark')}
				>
					{myTheme == 'dark' ? (
						<LightMode
							color='info'
							onClick={() => setMyTheme('light')}
							sx={{ marginRight: 2 }}
						/>
					) : (
						<ModeNight
							onClick={() => setMyTheme('dark')}
							sx={{ marginRight: 2 }}
						/>
					)}
					Mode
				</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default React.memo(Navbar);
