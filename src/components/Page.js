import React from 'react';
import "./Page.css"
import { useState, useEffect } from 'react';
import { useLocation, Routes} from 'react-router-dom';

const Page = (props) => {

    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location)
    const [transitionStage, setTransitionStage] = useState("fade-in")

    useEffect(() => {
        if (displayLocation !== location)
            setTransitionStage("fade-out")
    }, [location, displayLocation]);

    return (
        <div className = {transitionStage + " page"}
            onAnimationEnd={()=>{
                if (transitionStage === "fade-out"){
                    setTransitionStage("fade-in")
                    setDisplayLocation(location)
                }
            }}>
            <Routes location={displayLocation}>
                {props.children}
            </Routes>
        </div>
    );
}

export default Page;
