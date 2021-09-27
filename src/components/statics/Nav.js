import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    return (
        <nav className="founder-nav">
            <section className="founder-nav__container">
                <h3 className="founder-nav__title"> Techraise.io </h3>
                <ul className="founder-nav__menu-list">
                    <li> <NavLink to="/my-startup"> My startup </NavLink> </li>
                    <li> <NavLink to="/metrics"> Metrics </NavLink> </li>
                    <li> <NavLink to="/requests"> Requests </NavLink> </li>
                    <li> <NavLink to="/marketplace"> Marketplace </NavLink> </li>
                    <li> <NavLink to="/resources"> Resources </NavLink> </li>
                </ul>
            </section>
        </nav>
    );
};

export default Nav;
