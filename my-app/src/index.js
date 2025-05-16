import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import './style/style.scss';

//--------------------------------------------------------------------------------
// import DisneyService from './services/DisneyServices';
// const disneyService = new DisneyService();
// disneyService.getAllCharacters().then(result => result.data.forEach(item => console.log(item.name)));
// disneyService.getAllCharacters().then(result => console.log(result));
// disneyService.getCharacter().then(result => console.log(result.data[0].name));
// disneyService.getCharacter().then(result => console.log(result.data[1].name));
// disneyService.getCharacter(112).then(result => console.log(result.data.name));
//--------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);