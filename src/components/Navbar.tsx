import {
	LightMode,
	Logout,
	ModeNight,
	Search,
	Settings,
} from '@mui/icons-material';
import {
	AppBar,
	Button,
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
				<SearchBar color={'text.primary'}>
					<InputBase
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
				</SearchBar>
				<Icons>
					{mode == 'dark' ? (
						<ModeNight color='info' onClick={() => setMode('light')} />
					) : (
						<LightMode color='inherit' onClick={() => setMode('dark')} />
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
					<Typography>{user.name && user.name}</Typography>
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
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<MenuItem onClick={() => logout()}>
					<Logout sx={{ marginRight: 2 }} />
					Log out
				</MenuItem>
				<MenuItem>
					<Settings sx={{ marginRight: 2 }} />
					Settings
				</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default React.memo(Navbar);
