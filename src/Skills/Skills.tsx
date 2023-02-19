import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsWrapper}>
            <div className={s.container}>
                <h4>My skills</h4>
                <div className={s.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>

        </div>
    )
}

export default Skills;
