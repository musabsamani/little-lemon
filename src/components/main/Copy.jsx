import React from 'react';
import Styles from './copy.module.scss';

const Footer = () => {
    return (
        <section className={Styles.copy}>
            <div className={Styles.container}>
                <div>Developed with <span>&hearts;</span> by <a href='https://github.com/musabobada'>musab</a> &copy;copyright reserved 2024</div>
            </div>
        </section>
    );
}

export default Footer;





