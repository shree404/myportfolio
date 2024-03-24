import React from 'react';
import '../styles.css';
function Nav(){
    return(
        <div className='ml-2 mt-4 gap-4 flex justify-center  '>
                <button className='bg-[#24272C] text-white flex justify-center font-bold py-2 px-2 w-30 h-10 mr-4 rounded-lg shadow-lg shadow-cyan-500/50 '>Home  </button>
                <button className='bg-[#24272C] text-white font-bold py-2 px-2 rounded-lg w-30 h-10 mr-4'>About</button>
                <button className='bg-[#24272C] text-white font-bold py-2 px-2 rounded-lg w-30 h-10 mr-4'>Resume</button>
                <button className='bg-[#24272C] text-white font-bold py-2 px-2 rounded-lg w-30 h-10 mr-4'>Projects</button>
                <button className='bg-[#24272C] text-white font-bold py-2 px-2 rounded-lg w-30 h-10'>Contact</button>
        </div>
    )
}
export default Nav;