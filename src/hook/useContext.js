import { useContext } from 'react';
import { MyContext } from '../App';

const useMYContext = () => {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error("Context is not available.");
    }
    return context;
}

export default useMYContext;
