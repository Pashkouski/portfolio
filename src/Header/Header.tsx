import React from 'react';
import Navbar from "../Navbar/Navbar";
import s from './Header.module.css'



const Header = () => {
    return (
        <div className={s.header}>
                <Navbar />
        </div>
    );
};

export default Header;