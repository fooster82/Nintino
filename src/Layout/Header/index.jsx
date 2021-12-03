import React, {  useState } from 'react';
import * as Components from '../../Components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './header.css';


export function Header() {
    const [showMenu, setShowMenu] = useState(false)

    let menu;
    let hamburger = document.getElementById('hamburger');

    if(showMenu) {
        hamburger.style.display = "none";
        menu = 
            <div id="nav-menu">
                <button id="close-menu">
                    <FontAwesomeIcon icon={faTimes} onClick={() => setShowMenu(false)}/>
                </button>
                <ul>
                    <li><Link to=''>Log out</Link></li>
                    <li><Link to=''>Home</Link></li>
                    <li><Link to=''>Other links etc</Link></li>
                </ul>
            </div>
    } 

    return (
        <header>
            <Components.Logo />
            <nav>
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(true)} id="hamburger"/>
                { menu }
            </nav>

        </header>
    )
}
