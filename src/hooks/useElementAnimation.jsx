import { useContext, useRef, useState, useEffect } from "react";
import { Context } from "../App";

function useElementAnimation(current_section){
    const context = useContext(Context);
    const container_ref = useRef(null);
    const [animation_class, setAnimationClass] = useState("animated");
    
    const setAnimation = () => {
        if(context.visitedSections.includes(current_section)) setAnimationClass("fastLoaded");
        else setAnimationClass("animated");
    }
    
    useEffect(() => {
        setAnimation();
    }, [container_ref]);
    
    return [container_ref, animation_class];
}

export default useElementAnimation;