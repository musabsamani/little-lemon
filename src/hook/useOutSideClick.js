import { useEffect, useRef, useState } from 'react';

const useOutSideClick = () => {
    const targetElement = useRef(null)
    const [isOutSide, setIsOutSide] = useState(false);
    function outside(e) {
        if (targetElement.current && targetElement.current?.classList.contains("visible")) {
            if (!targetElement.current.contains(e.target)) {
                setIsOutSide(true)
            } else {
                setIsOutSide(false)
            }
        }
    }
    useEffect(() => {
        document.addEventListener("click", outside)
        return () => document.removeEventListener("click", outside)
    }, [])
    return { isOutSide, setIsOutSide, targetElement }
}

export default useOutSideClick;
