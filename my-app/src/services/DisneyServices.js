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
			films: Character.films,
			tvShows: Character.tvShows,
			videoGames: Character.videoGames,					
			thumbnail: Character.imageUrl,
			homepage: Character.url,
			wiki: Character.sourceUrl,			
		}
	}

}

export default DisneyService;