import React from "react";
import '../styles.css';


function Bio(){
    return(
        <div>
            <p>Hey</p>
            <p>I'M Shreesha Aatreya</p>
            <p>Web Developer</p>
            <p> Highly motivated  student studying  BSC CSIT.</p>
             <p> Actively seeking opportunities to apply my skills and knowledge to real-world projects</p>
             <p>and contribute to the advancement of the industry.</p>
             <div>
                <button className='bg-[#24272C] text-white flex justify-center font-bold py-2 px-2 w-30 h-10 mr-4 rounded-lg'>Learn More</button>
                <button className='bg-[#24272C] text-white flex justify-center font-bold py-2 px-2 w-30 h-10 mr-4 rounded-lg'>Contact me </button>
             </div>
        </div>
    )
}
 export default Bio;