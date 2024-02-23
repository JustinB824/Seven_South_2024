import React from 'react'
import './nav.scss'

function Nav(props) {

    function scrollToSection(section) {
        document.getElementById(section).scrollIntoView({block: 'start', behavior: 'smooth'})
    }

    return (
        <nav className={props.status} onClick={props.changeMenu}>
            <ul>
                <li><button onClick={()=>{scrollToSection('root')}}>Home</button></li>
                <li><button onClick={()=>{scrollToSection('menu')}}>Menu</button></li>
                <li><button onClick={()=>{scrollToSection('about')}}>About</button></li>
            </ul>
        </nav>
    )
}

export default Nav