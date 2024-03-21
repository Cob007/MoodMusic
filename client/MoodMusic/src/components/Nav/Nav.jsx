import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import logo from "../../assets/images/logo.png"

const Nav = () => {
    return (
        <div className='nav'>
            <img className='logoSongPage' src={logo} alt="mood music logo" />
            {/* 
            <ul className='listParent'>
                <li className='listItem'><Link to="/">Homepage</Link></li>
                <li className='listItem'><Link to="/about">About</Link></li>
            </ul> */}


        </div>
    );
};

export default Nav;