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
