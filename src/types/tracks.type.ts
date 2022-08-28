export type SongsType = {
	tracks?: {items: SingleTrackType[]};
};

export type SingleTrackType = {
	name: string;
	href: string;
	release_date: string;
	album: { images: { height: number; url: string }[] };
};
