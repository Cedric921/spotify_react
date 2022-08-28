import { PaletteMode } from "@mui/material";

export type SongsType = {
	tracks?: {items: SingleTrackType[]};
};

export type SingleTrackType = {
	name: string;
	href: string;
	release_date: string;
	album: { images: { height: number; url: string }[] };
};


export type HomeType = {
   mode: PaletteMode
   setMode: React.Dispatch<React.SetStateAction<PaletteMode>>
}

export type AsideType = {
	mode: PaletteMode;
   setMode: React.Dispatch<React.SetStateAction<PaletteMode>>
};
