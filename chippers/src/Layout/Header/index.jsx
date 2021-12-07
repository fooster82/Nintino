import React, {  useState } from 'react';
import * as Components from '../../Components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

export function Header() {
    const [showMenu, setShowMenu] = useState(false)
    let history = useHistory()
    let menu;

    if(showMenu) {
        menu = 
            <div id="nav-menu">
                <button id="close-menu">
                    <FontAwesomeIcon icon={faTimes} onClick={() => setShowMenu(false)} />
                </button>
                <ul>
                    <li><button onClick={()=>history.push("/")}>Home</button></li>
                    <li><button onClick={()=>history.push("/logout")}>Logout</button></li>
                    {/* <td><Link to={"/games/chippers"}>Chippers</Link></td> */}
                    <li><Link>Other links etc</Link></li>
                </ul>
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
