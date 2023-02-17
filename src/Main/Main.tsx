import React from 'react';
import {NavLink, Route} from "react-router-dom";

const Navbar = () => {
    return (
            <nav>
                <ul>
                    <li>
                        <NavLink to='/Main'>
                            <span>Main</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Skills'>
                            <span>Skills</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/Projects'>
                            <span>Projects</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/Contact'>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
};

export default Navbar;
