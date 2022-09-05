import React, { createContext, useEffect, useState } from 'react';
import { DefaultTrackContext, ContextType } from '../types/tracks.type';

// display songs from context
const CLIENT_ID = '873b382d84e242f7be31abf9f91bd0a2';
const CLIENT_SECRET = '174f7831a4c243fd9a92577d3a6413c9';

export const TracksContext = createContext<DefaultTrackContext>({
	albums: [],
	tracks: {},
	song: {},
	async getApi() {},
	searchInput: '',
	setSearchInput() {},
	async searchTracks(searchInput) {},
	async searchAlbums(id) {},
});

const TracksContextProvider = ({ children }: ContextType) => {
	const [song, setSong] = useState({
		id: '',
		name: '',
		href: '',
		popularity: 0,
		release_date: '',
		album: { images: { height: 0, url: [] } },
	});
	const [tracks, setTracks] = useState({
		id: '',
		name: '',
		href: '',
		popularity: 0,
		release_date: '',
		album: { images: { height: 0, url: [] } },
	});
	const [albums, setAlbums] = useState([
		{
			id: '',
			name: '',
			href: '',
			popularity: 0,
			release_date: '',
			uri: '',
		},
	]);
	const [searchInput, setSearchInput] = useState('bilie elish');
	const [accesToken, setAccesToken] = useState(null);

	/**
	 * Function to get the accesToken from spotify
	 * @return void
	 */
	const getApi = async () => {
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
		};
		try {
			// get API token
			const res = await fetch(`https://accounts.spotify.com/api/token`, params);
			const data = await res.json();
			if (data.access_token) {
				setAccesToken(data.access_token);
			}
			searchTracks(searchInput);
			searchAlbums(searchInput);
		} catch (e: any) {
			console.error(e.message);
		}
	};

	const searchTracks = async (track = 'sia') => {
		const params = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + accesToken,
			},
		};

		try {
			const response = await fetch(
				`https://api.spotify.com/v1/search?q=${track}&type=album,track`,
				params
			);
			const data = await response.json();
			setTracks(data.tracks);
			//add all tracks to local db
			localStorage.removeItem('spotifyTracks');
			localStorage.setItem('spotifyTracks', JSON.stringify(data));
		} catch (err: any) {
			console.log(err.message);
			//get all tracks from localStorage
			const localTracks = JSON.parse(localStorage.getItem('spotifyTracks')!);
			if (localTracks) setTracks(localTracks.tracks);
		}
	};
	// useEffect(() => {
	// 	searchAlbums();
	// }, [accesToken]);

	const searchAlbums = async (track = 'sia') => {
		const params = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + accesToken,
			},
		};

		try {
			const response = await fetch(
				`https://api.spotify.com/v1/search?q=${track}&type=album`,
				params
			);
			const data = await response.json();
			if (data) setAlbums(data.albums.items);
		} catch (err: any) {
			console.log(err.message);
		}
	};

	return (
		<TracksContext.Provider
			value={{
				albums,
				song,
				tracks,
				searchInput,
				setSearchInput,
				getApi,
				searchTracks,
				searchAlbums,
				// searchTrackFromRapid,
			}}
		>
			{children}
		</TracksContext.Provider>
	);
};

export default TracksContextProvider;
