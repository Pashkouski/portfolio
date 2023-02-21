import React from 'react';
import s from './Contact.module.css'


const Contact = () => {
    return (
        <div className={s.offersWrapper}>
            <div className={s.container}>
                <div className={s.contact}>
                    <h4>Lorem ipsum dolo omnis quam, repellat sint unde ut voluptatem!</h4>

                    <form action="" className={s.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="contact"></textarea>
                    </form>
                    <button> Lorem psum </button>
                </div>

            </div>
        </div>
    );
};

export default Contact;