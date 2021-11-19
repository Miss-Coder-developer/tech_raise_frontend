import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import './Nav.scss';


const Nav = () => {

    const [hamburgerActiv, setHamburgerActiv] = useState(false);

    const hamburgerOpen = () => {
      setHamburgerActiv(!hamburgerActiv);
    };

    return (
        <header className="founder-nav">
            <section className="founder-nav__container wrapper">
                <Link to="/" type="button" className="founder-nav__logo-butn">
                    Techraise.io 
                </Link>
                <ul className="founder-nav__menu-list">
                    <li> <NavLink to="/my-startup"> My startup </NavLink> </li>
                    <li> <NavLink to="/metrics"> Metrics </NavLink> </li>
                    <li> <NavLink to="/requests"> Requests </NavLink> </li>
                    <li> <NavLink to="/marketplace"> Marketplace </NavLink> </li>
                    <li> <NavLink to="/resources"> Resources </NavLink> </li>
                    {/* <li> <NavLink to="/advisors"> Advisors </NavLink> </li> */}
                </ul>
                <div className='hamburger-mb-menu' onClick={hamburgerOpen}>
                    <span
                    className={!hamburgerActiv ? 'hamburger1' : 'hamburger11'}
                    ></span>
                    <span
                    className={!hamburgerActiv ? 'hamburger2' : 'hamburger22'}
                    ></span>
                    <span
                    className={!hamburgerActiv ? 'hamburger3' : 'hamburger33'}
                    ></span>
                </div>
            </section>

            <div className={hamburgerActiv ? 'menu-blok-active' : 'menu-blok'} onClick={hamburgerOpen}>
                <div className='menu-blok__container' onClick={(e) => { e.stopPropagation(); }}>
                    <ul className='menu-blok__navigation'>
                        <li onClick={hamburgerOpen}>
                            <Link to='/aboutus'>
                              About
                            </Link>
                        </li>
                        <li onClick={hamburgerOpen}>
                            <Link to='/partners'>
                              Partners
                            </Link>
                        </li>
                        <li onClick={hamburgerOpen}>
                            <Link to='/contacts'>
                              Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Nav;
