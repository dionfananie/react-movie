import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Link to='/'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h4>Daily Movies</h4>  
            </nav>
        </Link>
    )
};

export default Header;