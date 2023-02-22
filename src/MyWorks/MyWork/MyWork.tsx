import React from 'react';
import s from './MyWork.module.css'
import {NavLink} from "react-router-dom";

const MyWork = () => {
    return (
        <div className={s.SkillWrapper}>
            <div className={s.inner}>
                <NavLink to={'/work2'}>
                    <div>
{/*                        <img className={s.img}
                             src="https://htstatic.imgsmail.ru/pic_image/0efda7a7a24673153e86521d430076e3/840/526/2269298/"
                             alt=""/>*/}
                        <button>more details</button>
                    </div>
                </NavLink>
            </div>
            <div className={s.projectName}> Lorem ipsum dolor sit amet.</div>
            <div className={s.info}>
                <i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis dolores
                    dolorum eius eligendi explicabo impedit laboriosam maiores neque nulla, officia quae qui quod
                    ratione
                    repellendus, repudiandae similique tempora! Ipsam!
                </i>

                 </div>
        </div>
    );
};

export default MyWork;