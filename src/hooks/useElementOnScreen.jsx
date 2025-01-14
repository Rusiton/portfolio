import { useRef, useState, useEffect } from 'react';

function useElementOnScreen(options){
    const containerRef = useRef(null);
    const [isVisible, setVisibility] = useState(false);

    const onIntersection = (entries) => {
        const [ entry ] = entries;
        setVisibility(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection, options);
        if(containerRef.current) observer.observe(containerRef.current);

        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [containerRef, options]);

    return [containerRef, isVisible];
}

export default useElementOnScreen;