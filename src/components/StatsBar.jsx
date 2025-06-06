import './StatsBar.css';

const StatsBar = () => {
    
    return (
        <footer className='stats-bar'>
            <div className='stat'>
            <p className="big">65+ million</p>
            <p className="small">Developers</p>
            </div>
            <div className='stat'>
            <p className="big">3+ million</p>
            <p className="small">Organizations</p>
            </div>
            <div className='stat'>
            <p className="big">200+ million</p>
            <p className="small">Repositories</p>
            </div>
            <div className='stat'>
            <p className="big">72%</p>
            <p className="small">Fortune 50</p>
            </div>
        </footer>
    );
};

export default StatsBar;