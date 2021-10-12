import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Nav.css';


const Nav = () => {
    const history = useHistory();

    return (
        <nav className="founder-nav">
            <section className="founder-nav__container">
                <button 
                    type="button"
                    className="founder-nav__logo-butn"
                    onClick={ () => history.push('/') }
                >
                    Techraise.io 
                </button>
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
