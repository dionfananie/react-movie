import React from 'react';
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <div className="header__banner d-flex flex-column">
            <Link to='/'>
                <div className="header__banner-sub">
                    <input className="header__banner-search" type="search" placeholder="Search Movies"></input>
                </div>
            </Link>
        </div>
    )
};

export default Banner;