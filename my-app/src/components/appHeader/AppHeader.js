import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="#">
                    <span>Disney</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="#">Characters</a></li>
                    /
                    <li><a href="#">Films/Shows/Games</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;