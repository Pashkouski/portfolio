import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={s.text}>
                <span>Lorem ipsum dolor. lorem</span>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum.</p>
            </div>
            <div className={s.photos}>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi assumenda atque blanditiis corporis deserunt doloribus ea expedita impedit incidunt itaque iure labore placeat quaerat qui repellat, tenetur ut voluptatum?</span>
                <img src="#" alt=""/>
            </div>
        </div>
    );
};

export default Main;