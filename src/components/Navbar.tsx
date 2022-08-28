import { Search } from '@mui/icons-material';
import {
	AppBar,
	Button,
	InputBase,
	styled,
	Toolbar,
	Typography,
} from '@mui/material';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { TracksContext } from '../context/TracksContext';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const SearchBar = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}));

type NavbarType = {
	search: () => Promise<void>;
	setSearchInput: Dispatch<SetStateAction<string>>;
};

const Navbar = (/*{ search, setSearchInput }: NavbarType*/) => {
	const { searchTracks, setSearchInput } = useContext(TracksContext);
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography>Music search</Typography>
				<SearchBar>
					<InputBase
						color='warning'
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
			</StyledToolbar>
		</AppBar>
	);
};

export default React.memo(Navbar);
