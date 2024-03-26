import React from "react";
import AboutmeContent from "../components/AboutMe/aboutmeContent";
import AboutMeImage from "../components/AboutMe/aboutmeImage";

function About(){
    return(
        <div className="mt-20 flex justify-center gap-20">
            <AboutMeImage/>
            <AboutmeContent/>
        </div>
    )
}

export default About;
