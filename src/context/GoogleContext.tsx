// 168229458088-7nheosjmbhhehtmkc4qrlfq3e0soajqr.apps.googleusercontent.com
// GOCSPX - myGXt7Cu8tLdJhuusKxVhhPZbzoS;
import React, { ContextType, createContext, useState } from 'react';
import { DefaultUserContext, UserType } from '../types/tracks.type';
import jwt_decode from 'jwt-decode';

export const GoogleContext = createContext<DefaultUserContext>({
	user: { email: '', name: '', picture: '' },
	init() {},
	logout() {},
	checkUser(){},
});

const GoogleContextProvider = ({ children }: ContextType) => {
	const [user, setUser] = useState<UserType>({
		email: '',
		name: '',
		picture: '',
	});

	const handleCallbackResponse = (response: any) => {
		console.log('Encoded JWT ID token :', response.credential);
		const userObject: UserType = jwt_decode(response.credential);
		setUser(userObject);
		localStorage.setItem('user', JSON.stringify(userObject));
		console.log(userObject);
		// document.getElementById('googleSignInButton')?.hidden = true,
	};

	const checkUser = () => {
		const userObject = localStorage.getItem('user');
		if (!userObject) {
			return false;
		}
      setUser(JSON.parse(userObject));
      return true
	};

	const logout = () => {
		setUser({ email: '', name: '', picture: '' });
	};

	const init = () => {
		google.accounts.id.initialize({
			client_id:
				'168229458088-7nheosjmbhhehtmkc4qrlfq3e0soajqr.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});
		google.accounts.id.renderButton(
			document.getElementById('googleSignInButton'),
			{ theme: 'outline', size: 'large' }
		);
	};
	return (
		<GoogleContext.Provider value={{ user, init, logout, checkUser }}>
			{children}
		</GoogleContext.Provider>
	);
};

export default GoogleContextProvider;
