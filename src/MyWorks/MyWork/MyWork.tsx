import React from 'react';
import s from './MyWork.module.css'
import {NavLink} from "react-router-dom";

const MyWork = () => {
    return (
        <div className={s.SkillWrapper}>
            <NavLink to={'/work2'}>
                <div className={s.wrapper}>
                    <img className={s.img} src="https://itproger.com/img/news/1620016926.png" alt=""/>
                    <button>ewqwqewewq</button>
                </div>
            </NavLink>
            <div className={s.info}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis dolores
                dolorum eius eligendi explicabo impedit laboriosam maiores neque nulla, officia quae qui quod ratione
                repellendus, repudiandae similique tempora! Ipsam!
            </div>
        </div>
    );
};

export default MyWork;