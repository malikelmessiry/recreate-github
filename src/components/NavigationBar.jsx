import './navigation-bar.css';
import SearchBar from './SearchBar';

const NavigationBar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav-links'>
                <li><img src="./src/assets/github-mark-white.png" className="logo"></img></li>
                <li>Why Github? <i className="arrow"></i></li>
                <li>Team</li>
                <li>Enterprise</li>
                <li>Explore <i className="arrow"></i></li>
                <li>Marketplace</li>
                <li>Pricing <i className="arrow"></i></li>
            </ul>
            <SearchBar></SearchBar>
        </nav>
    );
};

export default NavigationBar;