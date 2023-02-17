import React from 'react';
import {NavLink, Route} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at distinctio dolor doloribus
            eligendi expedita explicabo fuga fugit ipsum iure laboriosam, minima minus molestias natus nemo nisi
            repellendus, vero.

            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <NavLink to='/Main'>*/}
            {/*                <span>Main</span>*/}
            {/*            </NavLink>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <NavLink to='/Main'>*/}
            {/*                <span>Skills</span>*/}
            {/*            </NavLink>*/}
            {/*        </li>*/}

            {/*        <li>*/}
            {/*            <NavLink to='/Main'>*/}
            {/*                <span>Projects</span>*/}
            {/*            </NavLink>*/}
            {/*        </li>*/}

            {/*        <li>*/}
            {/*            <NavLink to='/Main'>*/}
            {/*                <span>Contact</span>*/}
            {/*            </NavLink>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
                <Route
                    path='/messages'
                    element={
                        <Main />
                    }
                />

        </div>
    )
        ;
};

export default Navbar;
