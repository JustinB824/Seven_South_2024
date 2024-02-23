import React, { useState } from 'react'
import './header.scss'
import Nav from '../Nav'
import Logo from './img/logo.png'

function Header() {
    const [navSitch, setNavSitch] = useState('closed');

    function toggleMenu() {
        if (window.innerWidth < 576) {
            setNavSitch((navSitch === 'closed') ? 'open' : 'closed')
        }
    }

    return (
        <header id='ssHeader'>
            <div className='site_container'>
                <img src={Logo} className='logo_image' alt='7 South Sandwich Company Logo' />
                <button className={`menu_burger ${navSitch}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <Nav status = {navSitch} changeMenu = {toggleMenu} />
            </div>
        </header>
    )
}

export default Header