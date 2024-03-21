import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    return (
        <div className='nav'>
            <ul className='listParent'>
                <li className='listItem'><Link to="/">Homepage</Link></li>
                <li className='listItem'><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
};

export default Nav;