import React from "react";
import ProjectButton from "../components/project/ProjectButton";
import ProjectSlider from "../components/project/pojectSlider";
import ProjectHead from "../components/project/header";
import ProjectIcon from "../components/project/ProjectIcon";
import ProjectDetails from "../components/project/ProjectDetails";


function Project(){
    return(
        <div>
            <ProjectHead/>
            {/* <ProjectButton/> */}
            {/* <ProjectSlider/> */}
            <div className="justify-center">
            {/* <ProjectIcon/> */}
            <ProjectDetails/>
            </div>
        </div>
    )
}

export default Project;