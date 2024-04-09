import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useStickyNav from "../../hook/useStickyNav";
import useOutSideClick from "../../hook/useOutSideClick";

import Styles from "./header.module.scss"

const Header = () => {
    const [isVisibleMenu, setIsVisibleMenu] = useState(false)
    const stickyClass = useStickyNav()
    const { targetElement, isOutSide, setIsOutSide } = useOutSideClick()

    useEffect(() => {
        if (isOutSide) setIsVisibleMenu(!isOutSide)
    }, [isOutSide]);
    useEffect(() => {
        if (isVisibleMenu) setIsOutSide(!isVisibleMenu)
    }, [isVisibleMenu]);


    function showMenu() {
        setIsVisibleMenu(isVisibleMenu => !isVisibleMenu)
    }

    return (
        <header className={stickyClass} id="header">
            <div className={Styles.container}>
                <Link to="/" className={Styles.logo}>
                    <img src="./icons/Logo.svg" alt="" />
                </Link>
                <nav>
                    <div className={Styles.row}>
                        <button onClick={e => { e.stopPropagation(); showMenu() }} className={Styles["toggle-menu"]}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <img src="./icons/basket.svg" alt="basket" />
                    </div>
                    <ul ref={targetElement} className={isVisibleMenu ? "visible" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="/#about">about</a></li>
                        <li><a href="/#specials">menu</a></li>
                        <li><Link to="/reservation">reservation</Link></li>
                        <li><a href="#">order online</a></li>
                        <li><Link to="/login">login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
