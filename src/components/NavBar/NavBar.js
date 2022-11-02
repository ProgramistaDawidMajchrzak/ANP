import React from 'react';
import logo from '../../images/logo2.png';
import './Navbar.css';


function Navbar() {
    return (
        <div className='navbar_container'>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Navbar;