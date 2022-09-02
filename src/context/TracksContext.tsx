import React, { createContext, useState } from 'react';
import { DefaultTrackContext, ContextType } from '../types/tracks.type';

// display songs from context
const CLIENT_ID = '873b382d84e242f7be31abf9f91bd0a2';
const CLIENT_SECRET = '174f7831a4c243fd9a92577d3a6413c9';

export const TracksContext = createContext<DefaultTrackContext>({
	tracks: {},
	song: {},
	async getApi() {},
	searchInput: '',
	setSearchInput() {},
	async searchTracks(searchInput) {},
	async searchTrackFromRapid(id) {},
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
	const [searchInput, setSearchInput] = useState('bilie elish');
	const [accesToken, setAccesToken] = useState('-');

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
			if (data.access_token) setAccesToken(data.access_token);
			console.log(data);
			searchTracks(searchInput);
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
			console.log('from local', localTracks);
		}
	};


	const searchTrackFromRapid = async (id = '4WNcduiCmDNfmTEz7JvmLv') => {
		try {
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key':
						'1145f1344bmshd017a5918cd108cp11def4jsn8eb51cc2a7bd',
					'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
				},
			};
			const response = await fetch(
				`https://spotify23.p.rapidapi.com/tracks/?ids=${id}`,
				options
			);
			const data = await response.json();
			setSong(data.tracks);

			localStorage.setItem('songLocal', JSON.stringify(data));
		} catch (err: any) {
			console.log(err.message);
			// on recupere les musiques locales
			const songLocal = JSON.parse(localStorage.getItem('songLocal')!);
			if (songLocal) setSong(songLocal.tracks);
		}
	};
	console.log(searchInput);
	return (
		<TracksContext.Provider
			value={{
				song,
				tracks,
				searchInput,
				setSearchInput,
				getApi,
				searchTracks,
				searchTrackFromRapid,
			}}
		>
			{children}
		</TracksContext.Provider>
	);
};

export default TracksContextProvider;
