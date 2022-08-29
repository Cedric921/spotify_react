import { ModeNight, Search } from '@mui/icons-material';
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
	const { searchTracks, setSearchInput } = useContext(TracksContext);
	const { user } = useContext(GoogleContext);
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography>Music search</Typography>
				<SearchBar color={'text.primary'}>
					<InputBase
						placeholder='Search track'
						fullWidth
						onChange={(e) => setSearchInput(e.target.value)}
						onKeyUp={(e) => {
							if (e.key === 'Enter') {
								// search();
								searchTracks(e.target.value);
							}
						}}
					/>
				</SearchBar>
				<Icons>
					<ModeNight
						color={mode == 'dark' ? 'info' : 'inherit'}
						onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}
					/>
					<Typography>{user.name}</Typography>
					<Avatar
						src={user.picture}
						alt='Avatar'
						sx={{ width: 30, height: 30 }}
						onClick={() => setOpenMenu(!openMenu)}
					/>
				</Icons>
				<UserBox>
					<Typography>{user.name}</Typography>
					<Avatar
						src={user.picture}
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
				<MenuItem>Profile</MenuItem>
				<MenuItem>Settings</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default React.memo(Navbar);
