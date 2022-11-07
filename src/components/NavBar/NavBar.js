import React from 'react';
import logo from '../../images/logo2.png';
import './NavBar.css';


function NavBar() {
    return (
        <div className='navbar_container'>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default NavBar;