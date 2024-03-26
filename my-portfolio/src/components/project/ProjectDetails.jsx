import React from "react";
import hms from '../images/hospital.png';
import PT from '../images/productivity.jpg';
import DS from '../images/sambidhan.jpg';
import SR from '../images/sastodeal.png';
import DMS from '../images/donation.jpg';
import github from '../images/githubicon.png';

function ProjectDetails(){
    const Productivity = () => {
        window.location.href = 'https://github.com/shree404/Changeivy.git'; 
      };
      const Sastodeal = () => {
        window.location.href = 'https://github.com/shree404/SastoDeal-revamp.git'; 
      };
      const DonationMS = () => {
        window.location.href = 'https://github.com/shree404/Daan-Griha-Frontend.git'; 
      };
    return(
        <div className="flex-col">
            <div className="gap-4 w-64 h-80 bg-[#232732] border  p-4 rounded-md shadow-md  shadow-cyan-300/100 content-center mt-5 " OnC >
                <div className="flex justify-center">
                  <img src={hms} alt="logo of Hospital Management System" className=" w-32 h-32 object-cover  justify-center" />
                  </div>
                  <span>
                    <p className="text-white mt-5">Real-time MERN-based project focused on remote healthcare facility status monitoring</p>
                  </span>
                  <div className="flex justify-center mt-5">
                  <img src={github}  alt="Link to the Repository" className="rounded-full w-10 h-10 object-cover shadow-md shadow-cyan-100/100 " />
                </div>
            </div>
            <div className=" mt-5 gap-4 w-64 h-80 bg-[#232732] border  p-4 rounded-md shadow-md  shadow-cyan-300/100 content-center ">
                <div className="flex justify-center">
                  <img src={PT} alt="logo of Productivity Tracker" className=" w-32 h-32 object-cover  justify-center" />
                  </div>
                  <span>
                    <p className="text-white mt-5"> MERN-based study tracking app</p>
                  </span>
                  <div className="flex justify-center mt-5">
                  <img src={github} onClick={Productivity} alt="Link to the Repository" className="rounded-full w-10 h-10 object-cover shadow-md shadow-cyan-100/100 " />
                </div>
            </div>
            <div className=" mt-5 gap-4 w-64 h-80 bg-[#232732] border  p-4 rounded-md shadow-md  shadow-cyan-300/100 content-center ">
                <div className="flex justify-center">
                  <img src={DS} alt="logo of Digital Sambidhan" className=" w-32 h-32 object-cover  justify-center" />
                  </div>
                  <span>
                    <p className="text-white mt-5"> AI-based Nepali legal information system.</p>
                  </span>
                  <div className="flex justify-center mt-5">
                  <img src={github} alt="Link to the Repository" className="rounded-full w-10 h-10 object-cover shadow-md shadow-cyan-100/100 " />
                </div>
            </div>
            <div className="mt-5 gap-4 w-64 h-80 bg-[#232732] border  p-4 rounded-md shadow-md  shadow-cyan-300/100 content-center ">
                <div className="flex justify-center">
                  <img src={SR} alt="logo of Sasto Deal" className=" w-32 h-32 object-cover  justify-center" />
                  </div>
                  <span>
                    <p className="text-white mt-5"> It is a E-Commerce Website</p>
                  </span>
                  <div className="flex justify-center mt-5">
                  <img src={github} onClick={Sastodeal} alt="Link to the Repository" className="rounded-full w-10 h-10 object-cover shadow-md shadow-cyan-100/100 " />
                </div>
            </div>
            <div className=" mt-5 gap-4 w-64 h-80 bg-[#232732] border  p-4 rounded-md shadow-md  shadow-cyan-300/100 content-center ">
                <div className="flex justify-center">
                  <img src={DMS} alt="logo of Donation Management System" className=" w-32 h-32 object-cover  justify-center" />
                  </div>
                  <span>
                    <p className="text-white mt-5"> MERN-based platform connecting donors with NGOs for efficient donation management</p>
                  </span>
                  <div className="flex justify-center mt-5">
                  <img src={github} onClick={DonationMS} alt="Link to the Repository" className="rounded-full w-10 h-10 object-cover shadow-md shadow-cyan-100/100 " />
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;