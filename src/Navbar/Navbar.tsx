import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
            <div className={s.NavbarWrapper}>
                <div className={s.container}>
                        <NavLink to='/Main'>
                            <span>Main</span>
                        </NavLink>

                        <NavLink to='/Skills'>
                            <span>Skills</span>
                        </NavLink>

                        <NavLink to='/Projects'>
                            <span>Projects</span>
                        </NavLink>

                        <NavLink to='/Contact'>
                            <span>Contact</span>
                        </NavLink>
                </div>
            </div>
    )
}

export default Navbar;
