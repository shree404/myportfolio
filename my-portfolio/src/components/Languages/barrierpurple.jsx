import React, {useEffect, useState} from "react";
import { Fade } from "react-reveal";

function BarrierPurple(){

    const [currentColor,setCurrentColor] = useState("purple");

    useEffect(() => {
        const colors = ['purple','yellow','white'];
        let currentIndex = 0; 

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % colors.length;
            setCurrentColor(colors[currentIndex]);
        },5000)
        return () => clearInterval(interval);
    } , []);

    return(
    <div className="mr-0 w-1/2">
        <Fade>
            <hr className={'line bg-${currentColor} p-1 h-2 w-1/3 mx-4'}
                style =  {{ backgroundColor: currentColor, transition : "background-color is"}}/>
        </Fade>
    </div>
    )
}

export default BarrierPurple;