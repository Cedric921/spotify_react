import { PaletteMode } from '@mui/material';

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

export type SongsType = {
	[x: string]: any;
	tracks?: { items: SingleTrackType[] };
};

export type SingleTrackType = {
	id: string;
	name: string;
	href: string;
	artists: { id: string; external_urls: { spotify: string } }[];
	external_urls: { spotify: string };
	popularity: number;
	release_date: string;
	album: { images: { height: number; url: string }[] };
};

export type AlbumType = {
	id: string;
	name: string;
	href: string;
	total_tracks: number;
	artists: { id: string; external_urls: { spotify: string } }[];
	external_urls: { spotify: string };
	images: { url: string }[];
	popularity: number;
	release_date: string;
	album: { images: { height: number; url: string }[] };
};

export type DefaultTrackContext = {
	albums: {
		id: string;
		name: string;
		href: string;
		popularity: number;
		release_date: string;
		uri: string;
	}[];
	tracks: SongsType;
	song: SongsType;
	searchInput: string;
	getApi: () => Promise<void>;
	searchTracks: (searchInput: string) => Promise<void>;
	setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

export type DefaultUserContext = {
	user: UserType;
	init: () => void;
	logout: () => void;
	checkUser: () => boolean;
};

export type UserType = {
	name: string;
	email: string;
	picture: string;
};
