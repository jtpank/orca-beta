import React from 'react';
import {Link} from 'react-router-dom';
class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <Link className="navbar-brand" to="/">OrcaBets</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className='nav-item'>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/signup">Signup / Login</Link>
                            </li>
                            <li className='nav-item'>
                                {/* link to sports first THEN live charts */}
                                <Link className="nav-link" to="/live-charts">Live Charts</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/historical-odds-db">Historical Odds Database</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/expert-analysis-nuggets">Expert Analyst Nuggets</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/frequently-asked-questions">FAQ</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sports</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li className='nav-item'>
                                        {/* Each of these should link to /sports/nfl or sports/<sport> */}
                                        <Link className="dropdown-item" to="/nfl">NFL</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className="dropdown-item" to="/nba">NBA</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            );
        }
}
export default NavBar;