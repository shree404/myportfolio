import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import hms from '../images/hospital.png';
import PT from '../images/productivity.jpg';
import DS from '../images/sambidhan.jpg';
import SR from '../images/sastodeal.png';
import DMS from '../images/donation.jpg';

function ProjectIcon() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const animateList = [hms, PT, DS, SR, DMS];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % animateList.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, [animateList.length]);

    const displayIndex = (index) => {
        return (index + currentIndex) % animateList.length;
    };

    return (
        <div className="flex-col mt-10">
            <div className="flex justify-center items-center mt-5">
                <Fade>
                    <div className="flex">
                        {[0, 1].map((index) => (
                            <div key={index} className="mr-5">
                                <img src={animateList[displayIndex(index)]} alt={`Project Icon ${displayIndex(index)}`} className="rounded-full w-32 h-32 object-cover shadow-md shadow-cyan-300/100" />
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default ProjectIcon;
