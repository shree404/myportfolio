import React from "react";

function ProjectButton(){
    return(
        <div className="flex justify-center gap-10">
            <button className='bg-[#24272C] text-white flex justify-center font-bold py-2 px-2 w-30 h-10 mr-4 rounded-lg shadow-md shadow-cyan-100/100 '>Bootstrap</button>
            <button className='bg-[#24272C] text-white flex justify-center font-bold py-2 px-2 w-30 h-10 mr-4 rounded-lg shadow-md shadow-cyan-100/100 '>React</button>
            <button className='bg-[#24272C] text-white flex justify-center font-bold py-2 px-2 w-30 h-10 mr-4 rounded-lg shadow-md shadow-cyan-100/100 '>MERN</button>
        </div>
    )
}

export default ProjectButton