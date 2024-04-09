import { useEffect, useRef, useState } from 'react';

const useStickyNav = () => {
    const [stickyClass, setStickyClass] = useState('');
    const prevScrollY = useRef(0);

    const stickNavbar = () => {
        let currentScrollPos = Math.floor(window.scrollY);
        if (currentScrollPos > 600) {
            setStickyClass('fixed');
            if (prevScrollY.current > currentScrollPos) setStickyClass('fixed sticky');
        } else {
            setStickyClass('');
        }
        prevScrollY.current = currentScrollPos;
    }

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);
    return stickyClass
}

export default useStickyNav;
