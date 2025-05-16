import { Component } from 'react';
import DisneyService from '../../services/DisneyServices';

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {

	constructor(props) {
		super(props);
		this.updateCharacter(); 
	}

	state = {
		character: {},
		// name: null,
		// films: null,
		// tvShows: null,
		// videoGames: null,
		// thumbnail: null,
		// homepage: null,
		// wiki: null,
	}
	
	disneyService = new DisneyService();

	onCharacterLoaded = (character) => {
		this.setState({character})
	}
	 
	updateCharacter = () => {
		const id = Math.floor(Math.random() * (827 - 1) + 1);
		this.disneyService
			.getCharacter(id)
			.then(this.onCharacterLoaded)
	}

	render () {
		const {character: {name, films, tvShows, videoGames, thumbnail, homepage, wiki}} = this.state;
		return (
			<div className="randomchar">
				<div className="randomchar__block">
					<img src={thumbnail} alt="Random character" className="randomchar__img"/>
					<div className="randomchar__info">
						<p className="randomchar__name">{name}</p>
						<div className="randomchar__descr">
							<p className="randomchar__films">Films: {films}</p>
							<p className="randomchar__tvShows">TV shows: {tvShows}</p>
							<p className="randomchar__videoGames">Video games: {videoGames}</p>
						</div>
						<div className="randomchar__btns">
							<a href={homepage} className="button button__main">
								<div className="inner">Homepage</div>
							</a>
							<a href={wiki} className="button button__secondary">
								<div className="inner">Wiki</div>
							</a>
						</div>
					</div>
				</div>
				<div className="randomchar__static">
					<p className="randomchar__title">
						Random character for today!<br/>
						Do you want to get to know him better?
					</p>
					<p className="randomchar__title">
						Or choose another one
					</p>
					<button className="button button__main">
						<div className="inner">try it</div>
					</button>
					<img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
				</div>
			</div>
		)
	}
}

export default RandomChar;