import React, {  useState } from 'react';
import * as Components from '../../Components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './header.css';


export function Header() {
    const [showMenu, setShowMenu] = useState(false)

    let menu;

    if(showMenu) {
        menu = 
            <div id="nav-menu">
                <button id="close-menu">
                    <FontAwesomeIcon icon={faTimes} onClick={() => setShowMenu(false)} />
                </button>
                <table>
                    <tr><Link>Log out</Link></tr>
                    <tr><Link>Home</Link></tr>
                    <tr><Link>Other links etc</Link></tr>
                </table>
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
