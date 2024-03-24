import React from "react";
import '../styles.css';
import image from './images/headerimage.png';

function HeaderImage() {
    return(
        <div className="flex justify-center items-center">
            <img src={image} alt="using computer "
      className="  " />
        </div>  

    )
}

export default HeaderImage; 