import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContents";

const Skills =() => {
    return (
        <section id="skills" className="skills">
        <PageHeaderContent headerText="Skills" icon={<BsInfoCircleFill size={40}/>}></PageHeaderContent>
       </section>
        
    )
}
export default Skills;