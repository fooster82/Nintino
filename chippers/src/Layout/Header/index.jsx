import React, {  useState } from 'react';
import * as Components from '../../Components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


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
                    <td><Link>Log out</Link></td>
                    <td><Link>Home</Link></td>
                    <td><Link>Other links etc</Link></td>
                </table>
            </div>
    }

    return (
        <header>
            <Components.Logo />
            <nav>
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(true)}/>
                { menu }
            </nav>
            <Link to={"chippers"}>Chippers</Link>

        </header>
    )
}
