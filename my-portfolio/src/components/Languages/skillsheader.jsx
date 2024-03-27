import React from "react";
import Barrier from "./barrier";
import BarrierPurple from "./barrierpurple";
import BarrierYellow from "./barrieryellow";
import LanguageButton from "./button";
import SkillsButton from "./button";


function SkillsHead(){
    return(
        <div>
            <h2 className="text-white font-bold text-lg ">Skills</h2>
            <div className="flex ">
                <Barrier />
                <BarrierPurple/>
                <BarrierYellow/>
            </div>
            <SkillsButton/>
        </div>
    )
}

export default SkillsHead;