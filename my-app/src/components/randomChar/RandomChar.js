import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import DisneyService from '../../services/DisneyServices';
import { ErrorMessageImg } from '../errorMessage/ErrorMessage';

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {

	// constructor(props) { // используем конструктор для вызова метода updateCharacter()
	// 	super(props); // теперь конструктор не нужен при применении ХУКОВ: componentDidMount() и 
	// 	console.log('constructor');
	// }

	state = {
		character: {}, // character: {name: null, films: null, tvShows: null, videoGames: null, thumbnail: null, homepage: null, wiki: null}
		loading: true,
		error: false,
	}
	
	disneyService = new DisneyService();

	componentDidMount () {
		this.updateCharacter();
		this.timerId = setInterval(this.updateCharacter, 1800000);
	}

	componentDidUpdate () { 
		// console.log('component updated');
	}

	componentWillUnmount () {
		clearInterval(this.timerId); 
		// console.log('unmount');
	}

	onCharacterLoaded = (character) => {
		this.setState({
			character,
			loading: false,
		})
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true,
		})
	}
	 
	updateCharacter = () => {
		const id = Math.floor(Math.random() * (827 - 1) + 1);
		this.disneyService
			.getCharacter(id)
			.then(this.onCharacterLoaded)
			.catch(this.onError)
	}

	render () {
		const {character, loading, error} = this.state;
		const errorMessageImg = error ? <ErrorMessageImg/> : null;
		const spinner = loading ? <Spinner/> : null;
		const content = !(loading || error) ? <ViewSpinner character={character}/> : null;

		return (
			<div className="randomchar">
				{errorMessageImg}
				{spinner}
				{content}
				<div className="randomchar__static">
					<p className="randomchar__title">
						Random character for today!<br/>
						Do you want to get to know him better?
					</p>
					<p className="randomchar__title">
						Or choose another one
					</p>
					<button onClick={this.updateCharacter} className="button button__main">
						<div className="inner">try it</div>
					</button>
					<img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
				</div>
			</div>
		)
	}
}

const ViewSpinner = ({character}) => {
	const {name, films, tvShows, videoGames, thumbnail, homepage, wiki} = character;
	return (
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
	)
}

export default RandomChar;