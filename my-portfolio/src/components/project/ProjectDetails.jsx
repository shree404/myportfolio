import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import hms from '../images/hospital.png';
import PT from '../images/productivity.jpg';
import DS from '../images/sambidhan.jpg';
import SR from '../images/sastodeal.png';
import DMS from '../images/donation.jpg';
import github from '../images/githubicon.png';

function ProjectDetails() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const animateList = [hms, PT, DS, SR, DMS];
    const descriptions = [
        "Real-time MERN-based project focused on remote healthcare facility status monitoring",
        "MERN-based study tracking app",
        "AI-based Nepali legal information system",
        "Revamped SastoDeal.com",
        "MERN-based platform connecting donors with NGOs for efficient donation management"
    ];
    const titles = [
        "Hospital Management System",
        "Productivity Tracker",
        "Digital Sambidhan",
        "SastoDeal Revamp",
        "Daan-Griha"
    ];

    const projectRepositories = [
        null,
        'https://github.com/shree404/Changeivy.git',
        null,
        'https://github.com/shree404/SastoDeal-revamp.git',
        'https://github.com/shree404/Daan-Griha-Frontend.git',
    ];

    const goToGitHub = (index) => {
        const repository = projectRepositories[index];
        if (repository) {
            window.open(repository, "_blank");
        }
    };
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % animateList.length);
        }, 5000); // Change image every 5 seconds (adjust as needed)

        return () => clearInterval(interval);
    }, [animateList.length]);

    const displayIndex = (index) => {
        return (index + currentIndex) % animateList.length;
    };

    return (
        <div className="flex justify-center mt-5">
            <Fade>
                <div className="flex gap-4">
                    <div className="bg-[#232732] border p-4 rounded-md shadow-md shadow-cyan-300/100 content-center">
                        <div className="flex justify-center">
                            <img src={animateList[displayIndex(0)]} alt={`Project Icon 0`} className="w-32 h-32 object-cover" />
                        </div>
                        <span>
                            <p className="text-white font-bold text-md flex justify-center">{titles[displayIndex(0)]}</p>
                            <p className="text-white mt-2 text-sm">{descriptions[displayIndex(0)]}</p>
                        </span>
                        {projectRepositories[displayIndex(0)] && (
                            <div className="flex justify-center mt-2">
                                <img src={github} alt="Link to the Repository" onClick={() => goToGitHub(0)} className="rounded-full w-10 h-10 object-cover shadow-md shadow-cyan-100/100 cursor-pointer" />
                            </div>
                        )}
                    </div>
                    <div className="bg-[#232732] border p-4 rounded-md shadow-md shadow-cyan-300/100 content-center">
                        <div className="flex justify-center">
                            <img src={animateList[displayIndex(1)]} alt={`Project Icon 1`} className="w-32 h-32 object-cover" />
                        </div>
                        <span>
                            <p className="text-white font-bold text-md flex justify-center">{titles[displayIndex(1)]}</p>
                            <p className="text-white mt-2 text-sm">{descriptions[displayIndex(1)]}</p>
                        </span>
                        {projectRepositories[displayIndex(1)] && (
                            <div className="flex justify-center mt-2">
                                <img src={github} alt="Link to the Repository" onClick={() => goToGitHub(1)} className="rounded-full w-10 h-10 object-cover shadow-md shadow-cyan-100/100 cursor-pointer" />
                            </div>
                        )}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default ProjectDetails;
