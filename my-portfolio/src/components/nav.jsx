import React from 'react';
import '../styles.css';
function Nav(){
    return(
        <div className='ml-2 mt-4 gap-4 flex justify-center  '>
                <button className='bg-[#24272C] text-white flex justify-center font-bold py-2 px-2 w-30 h-10 mr-4 rounded-lg shadow-md shadow-cyan-100/100 '>Home  </button>
                <button className='bg-[#24272C] text-white font-bold py-2 px-2 rounded-lg w-30 h-10 mr-4 shadow-md shadow-cyan-100/100'>About</button>
                <button className='bg-[#24272C] text-white font-bold py-2 px-2 rounded-lg w-30 h-10 mr-4 shadow-md shadow-cyan-100/100'>Resume</button>
                <button className='bg-[#24272C] text-white font-bold py-2 px-2 rounded-lg w-30 h-10 mr-4 shadow-md shadow-cyan-100/100'>Projects</button>
                <button className='bg-[#24272C] text-white font-bold py-2 px-2 rounded-lg w-30 h-10 shadow-md shadow-cyan-100/100'>Contact</button>
        </div>
    )
}
export default Nav;