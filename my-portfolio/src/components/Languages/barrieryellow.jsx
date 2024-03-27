import React, {useEffect, useState} from "react";
import { Fade } from "react-reveal";

function BarrierYellow(){

    const [currentColor,setCurrentColor] = useState("yellow");

    useEffect(() => {
        const colors = ['yellow','white','purple'];
        let currentIndex = 0; 

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % colors.length;
            setCurrentColor(colors[currentIndex]);
        },5000)
        return () => clearInterval(interval);
    } , []);

    return(
    <div className="w-1/2 mr-0">
        <Fade>
            <hr className={'line bg-${currentColor} p-1  w-1/2'}
                style =  {{ backgroundColor: currentColor, transition : "background-color is"}}/>
        </Fade>
    </div>
    )
}

export default BarrierYellow;