import React ,{Component,Fragment} from "react";
import Fade from 'react-reveal/Fade';

import hms from '../images/hospital.png';
import PT from '../images/productivity.jpg';
import DS from '../images/sambidhan.jpg';
import SR from '../images/sastodeal.png';
import DMS from '../images/donation.jpg';

function ProjectIcon(){
    return(
        <div className="flex-col  mt-10">
            <div className="flex justify-center items-center mt-5 ">
                <img src={hms} alt="hospital Management Systems Icon" className="rounded-full w-32 h-32 object-cover shadow-md shadow-cyan-300/100" />
            </div>
            <div className="flex justify-center items-center mt-5">
            <img src={PT} alt="Productivity Tracker Icon" className="rounded-full w-32 h-32 object-cover shadow-md shadow-cyan-300/100" />
            </div>
            <div className="flex justify-center items-center mt-5">
            <img src={DS} alt="Productivity Tracker Icon" className="rounded-full w-32 h-32 object-cover shadow-md shadow-cyan-300/100" />
            </div>
            <div className="flex justify-center items-center mt-5">
            <img src={SR} alt="Productivity Tracker Icon" className="rounded-full w-32 h-32 object-cover shadow-md shadow-cyan-300/100" />
            </div>
            <div className="flex justify-center items-center mt-5">
            <img src={DMS} alt="Productivity Tracker Icon" className="rounded-full w-32 h-32 object-cover shadow-md shadow-cyan-300/100" />
            </div>
        </div>
    )
}

export default ProjectIcon;