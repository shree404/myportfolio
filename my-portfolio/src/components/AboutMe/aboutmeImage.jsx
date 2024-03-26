import React from "react";
import Image from '../images/aboutimage.png';
import '../../styles.css';

function AboutMeImage(){
    return(
        <div className="flex justify-center items-center">
            <img src={Image} alt="about" />
        </div>
    )
}

export default AboutMeImage;