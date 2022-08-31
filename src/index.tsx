import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GoogleContextProvider from './context/GoogleContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<GoogleContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</GoogleContextProvider>
	</React.StrictMode>,
	document.getElementById('root')!
);
