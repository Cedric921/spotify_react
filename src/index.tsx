import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GoogleContextProvider from './context/GoogleContext';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContext';

ReactDOM.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<GoogleContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</GoogleContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
	document.getElementById('root')!
);
