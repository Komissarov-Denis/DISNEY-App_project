import {ErrorMessageImg, ErrorMessageText} from '../components/errorMessage/ErrorMessage.js';
	const errorMessageText = <ErrorMessageText/>;
	const errorMessageImg = <ErrorMessageImg/>;

class DisneyService {

	//--------------------------------------------------------------------------------
	_apiBase = 'https://api.disneyapi.dev/';

	getResource = async (url) => {
		const result = await fetch(url);
		if (!result.ok) {
			throw new Error(`Could not fetch ${url}, status: ${result.status}`);
		}
		return await result.json();
	};
	
	getAllCharacters = async () => {
		const result = await this.getResource(`${this._apiBase}character?pageSize=9`);
		return result.data.map(this._transformCharacter);
	}

	getCharacter = async (id) => {
		const result = await this.getResource(`${this._apiBase}character/${id}?`);
		return this._transformCharacter(result.data);
	}
	//-------------------------------------------------------------------------------

	_transformCharacter = (Character) => {
		return {
			name: Character.name,					
			films: Character.films ? `${Character.films.slice(0, 10)}...` : errorMessageText,
			tvShows: Character.tvShows ? `${Character.tvShows.slice(0, 10)}...` : errorMessageText,
			videoGames: Character.videoGames ? `${Character.videoGames.slice(0, 10)}...` : errorMessageText,
			thumbnail: Character.imageUrl ? Character.imageUrl : errorMessageImg,
			homepage: Character.url,
			wiki: Character.sourceUrl,			
		}
	}

}

export default DisneyService;