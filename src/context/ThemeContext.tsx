import { PaletteMode } from '@mui/material';
import React, { createContext, useState } from 'react';

type ThemeContextType = {
	children: React.ReactElement;
};

type ThemeType = {
	myTheme: PaletteMode;
	setMyTheme: React.Dispatch<React.SetStateAction<PaletteMode>>;
};

export const ThemeContext = createContext<ThemeType>({
	myTheme: 'dark',
	setMyTheme(){ null}
});

const ThemeContextProvider = ({ children }: ThemeContextType) => {
	const [myTheme, setMyTheme] = useState<PaletteMode>('dark');
	return (
		<ThemeContext.Provider value={{ myTheme, setMyTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
