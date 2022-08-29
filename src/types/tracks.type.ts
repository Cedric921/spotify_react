import { PaletteMode } from '@mui/material';

export type SongsType = {
	[x: string]: any;
	tracks?: { items: SingleTrackType[] };
};

export type SingleTrackType = {
	name: string;
	href: string;
	release_date: string;
	album: { images: { height: number; url: string }[] };
};

export type HomeType = {
	mode: PaletteMode;
	setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
};

export type AsideType = {
	mode: PaletteMode;
	setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
};

export type ContextType = {
	children: React.ReactNode;
};

export type DefaultTrackContext = {
	tracks: SongsType;
	searchInput: string;
	getApi: () => Promise<void>;
	searchTracks: (searchInput: string) => Promise<void>;
	setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

export type DefaultUserContext = {
	user: UserType;
	init: () => void;
	logout: () => void;
	checkUser: () => void | false;
};

export type UserType = {
	name: string;
	email: string;
	picture: string;
};
