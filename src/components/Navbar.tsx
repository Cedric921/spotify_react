import { ModeNight, Search } from '@mui/icons-material';
import {
	AppBar,
	Button,
	InputBase,
	styled,
	Toolbar,
	Switch,
	Typography,
} from '@mui/material';
import React, { Dispatch, SetStateAction, useContext } from 'react';
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

const Navbar = ({ mode, setMode }: AsideType) => {
	const { searchTracks, setSearchInput } = useContext(TracksContext);
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography>Music search</Typography>
				<SearchBar>
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
					<ModeNight
						color={mode == 'dark' ? 'info' : 'inherit'}
						onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}
					/>
			</StyledToolbar>
		</AppBar>
	);
};

export default React.memo(Navbar);
