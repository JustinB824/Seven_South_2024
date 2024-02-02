import React from 'react'
import './header.scss'
import Nav from '../Nav'
import Logo from './img/logo.png'

function Header() {
    return (
        <header>
            <div className='site_container'>
                <img src={Logo} alt='7 South Sandwich Logo' />
                <Nav />
            </div>
        </header>
    )
}

export default Header