import './navigation-bar.css';

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li><img src="./src/assets/github-mark-white.png" className="logo"></img></li>
                <li>Why Github?  <i className="arrow"></i></li>
                <li>Team</li>
                <li>Enterprise</li>
                <li>Explore <i className="arrow"></i></li>
                <li>Marketplace</li>
                <li>Pricing <i className="arrow"></i></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;