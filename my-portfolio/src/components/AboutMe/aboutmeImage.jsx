import React from "react";
import Image from '../images/aboutimage.png';
import '../../styles.css';

function AboutMeImage(){
    return(
        <div className="flex justify-center items-center">
            <img src={Image} alt="about" className="w-100 h-100"/>
        </div>
    )
}

export default AboutMeImage;