import {
	LightMode,
	Logout,
	ModeNight,
	Settings,
	Search,
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
import { Navigate } from 'react-router-dom';
import { GoogleContext } from '../context/GoogleContext';
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

const Navbar = ({ mode, setMode }: AsideType) => {
	const [openMenu, setOpenMenu] = useState(false);
	const { searchTracks, searchInput, setSearchInput } =
		useContext(TracksContext);
	const { user, logout } = useContext(GoogleContext);

	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography>Music search</Typography>
				<SearchBar>
					<InputBase
						color='primary'
						placeholder='Search track'
						fullWidth
						onChange={(e) => {
							setSearchInput(e.target.value);
							searchTracks(searchInput);
							// searchAlbums(searchInput);
						}}
						onKeyUp={(e) => {
							if (e.key === 'Enter') {
								searchTracks(searchInput);
							}
						}}
					/>
					<Search width='100px' />
				</SearchBar>
				<Icons>
					{mode == 'dark' ? (
						<LightMode color='info' onClick={() => setMode('light')} />
					) : (
						<ModeNight onClick={() => setMode('dark')} />
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
					<Settings sx={{ marginRight: 2 }} />
					Settings
				</MenuItem>
				<MenuItem onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
					{mode == 'dark' ? (
						<LightMode
							color='info'
							onClick={() => setMode('light')}
							sx={{ marginRight: 2 }}
						/>
					) : (
						<ModeNight
							onClick={() => setMode('dark')}
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
