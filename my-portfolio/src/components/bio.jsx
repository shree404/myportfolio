import React from "react";
import '../styles.css';


function Bio(){
    return(
        <div>
            <p className="text-lg text-white flex justify-center">Hey</p>
            <p className=" text-3xl text-white font-bold flex justify-center">I'M Shreesha Aatreya</p>
            <div className=" text-lg flex justify-center">
            <p className="text-lg flex text-white justify-center ">Web </p> <p className="text-lg text-red-500"> Developer</p> 
            </div>
            <p className="text-md text-white flex justify-center"> Highly motivated  student studying  BSC CSIT.</p>
             <p className="text-md text-white flex justify-center"> Actively seeking opportunities to apply my skills and knowledge to real-world projects</p>
             <p className="text-md text-white flex justify-center">and contribute to the advancement of the industry.</p>
             <div className=" mt-10 flex gap-20 justify-center">
                <button className='bg-[#24272C] text-white flex justify-center font-bold py-2 px-2 w-30 h-10 mr-4 rounded-lg shadow-md shadow-cyan-100/100 '>Learn More</button>
                <button className='bg-[#24272C] text-white flex justify-center font-bold py-2 px-2 w-30 h-10 mr-4 rounded-lg shadow-md shadow-cyan-100/100 '>Contact me </button>
             </div>
        </div>
    )
}
 export default Bio;