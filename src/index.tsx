import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GoogleContextProvider from './context/GoogleContext';

ReactDOM.render(
	<React.StrictMode>
		<GoogleContextProvider>
			<App />
		</GoogleContextProvider>
	</React.StrictMode>,
	document.getElementById('root')!
);
