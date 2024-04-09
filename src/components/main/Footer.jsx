import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './footer.module.scss';
import Copy from './Copy';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className={Styles.container}>
                    <div className={Styles.row}>
                        <div className={Styles.box}>
                            <img src="./landing/Mario and Adrian b2.jpg" alt="footer" />
                        </div>
                        <div className={Styles.box}>
                            <h3>doormat navigation</h3>
                            <ul>
                                <li><Link to="#" >home</Link></li>
                                <li><Link to="#" >about</Link></li>
                                <li><Link to="#" >menu</Link></li>
                                <li><Link to="#" >reservations</Link></li>
                                <li><Link to="#" >order Online</Link></li>
                                <li><Link to="#" >login</Link></li>
                            </ul>
                        </div>
                        <div className={Styles.box}>
                            <h3>contact</h3>
                            <ul>
                                <li><Link to="#" >adress</Link></li>
                                <li><Link to="#" >phone</Link></li>
                                <li><Link to="#" >email</Link></li>
                            </ul>
                        </div>
                        <div className={Styles.box}>
                            <h3>social media links</h3>
                            <ul>
                                <li><Link to="#" >adress</Link></li>
                                <li><Link to="#" >phone</Link></li>
                                <li><Link to="#" >email</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <Copy />
        </>
    );
}

export default Footer;





