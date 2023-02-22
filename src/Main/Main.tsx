import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={s.text}>
                <span>Lorem ipsum dolor. lorem</span>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum.</p>
            </div>
            <div className={s.photos}>

            </div>
        </div>
    );
};

export default Main;