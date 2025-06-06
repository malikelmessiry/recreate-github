import './navigation-bar.css';

const NavigationBar = () => {
    return (
        <nav>
            <img></img>
            <ul>
                <li>Why Github? <i className="arrow"></i></li>
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