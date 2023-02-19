import React from 'react';
import s from './MyWorks.module.css'
import MyWork from "./MyWork/MyWork";


const MyWorks = () => {
    return (
        <div className={s.skillsWrapper}>
            <div className={s.container}>
                <h4>My Work</h4>
                <div className={s.work}>
                    <MyWork/>
                    <MyWork/>
                </div>
            </div>

        </div>
    )
}

export default MyWorks;
