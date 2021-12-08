<<<<<<< HEAD
import React, {  useState } from 'react';
import * as Components from '../../Components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

import './header.css';

export function Header() {
    const [showMenu, setShowMenu] = useState(false)
    let history = useHistory()
    let menu;

    if(showMenu) {
        menu = 
            <div id="nav-menu" role="header">
                <button id="close-menu" role="menu">
                    <FontAwesomeIcon icon={faTimes} onClick={() => setShowMenu(false)} />
                </button>
                <ul>
                    <li><button onClick={()=>history.push("/")}>Home</button></li>
                    <li><button onClick={()=>history.push("/logout")}>Logout</button></li>
                    {/* <td><Link to={"/games/chippers"}>Chippers</Link></td> */}
                    <li><Link>Other links etc</Link></li>
                </ul>
            </div>
=======
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navBtn = useRef();
  const navBar = useRef();

  const closeNav = () => {
    navBtn.current.innerHTML = "&#9776;";
    navBtn.current.id = "nav-btn-burger";
    navBar.current.id = "hide";
  };

  const showNav = () => {
    switch (navBtn.current.id) {
      case "nav-btn-burger":
        navBtn.current.innerHTML = "&times;";
        navBtn.current.id = "nav-btn-cross";
        navBar.current.id = "show";
        break;
      case "nav-btn-cross":
        navBtn.current.innerHTML = "&#9776;";
        navBtn.current.id = "nav-btn-burger";
        navBar.current.id = "hide";
        break;
>>>>>>> c60206ce3d0568dba674ab394aa7b597fe13beed
    }
  };

  return (
    <>
      <div id="btn-container">
        <div ref={navBtn} id="nav-btn-burger" onClick={showNav}>
          &#9776;
        </div>
      </div>

      <nav ref={navBar} id='hide' className="links-container" role="navigation">
        <NavLink onClick={closeNav} className="links" to="/">
          Home
        </NavLink>

        <NavLink onClick={closeNav} className="links" to="/logout">
          Logout
        </NavLink>
        
        <NavLink onClick={closeNav} className="links" to="/comingsoon">
          Coming soon!
        </NavLink>

      </nav>
    </>
  );
};

export { Header };
