import React, { createContext, useState } from 'react';
import { DefaultTrackContext, ContextType } from '../types/tracks.type';

// display songs from context
const CLIENT_ID = '873b382d84e242f7be31abf9f91bd0a2';
const CLIENT_SECRET = '174f7831a4c243fd9a92577d3a6413c9';

export const TracksContext = createContext<DefaultTrackContext>({
	albums: [],
	tracks: { items: [] },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async getApi() {},
	searchInput: '',
	setSearchInput() {
		return null;
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	async searchTracks(_searchInput) {},
});

const TracksContextProvider = ({ children }: ContextType) => {

	const [tracks, setTracks] = useState({
		items: [
			{
				id: '',
				name: '',
				href: '',
				artists: [{ id: '', external_urls: { spotify: '' } }],
				external_urls: { spotify: '' },
				popularity: 0,
				release_date: '',
				album: { images: [{ height: 0, url: '' }] },
			},
		],
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
	const [searchInput, setSearchInput] = useState('billie elish');
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
		} catch (e: unknown | Error) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};

	/***
	 *  @params string track 
	 * function to give us data form spotify api by keyword in param
	 */

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
				`https://api.spotify.com/v1/search?q=${track}&type=album,track,artist&offset=0&limit=50`,
				params
			);
			const data = await response.json();
			if (data) {
				setTracks(data.tracks);
				setAlbums(data.albums.items);
			}
			//add all tracks to local db
			localStorage.removeItem('spotifyTracks');
			localStorage.setItem('spotifyTracks', JSON.stringify(data));
		} catch (err: unknown) {
			//get all tracks from localStorage
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const localTracks = JSON.parse(localStorage.getItem('spotifyTracks')!);
			if (localTracks) setTracks(localTracks.tracks);
		}
	};

	return (
		<TracksContext.Provider
			value={{
				albums,
				// song,
				tracks,
				searchInput,
				setSearchInput,
				getApi,
				searchTracks,
			}}
		>
			{children}
		</TracksContext.Provider>
	);
};

export default TracksContextProvider;
