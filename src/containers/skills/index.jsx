import React from "react";
import './style.scss';
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContents";
import {skillsData} from "./utils"
import { Animate, AnimateKeyframes } from "react-simple-animate";

const Skills =() => {
    return (
        <section id="skills" className="skills">
        <PageHeaderContent headerText="Skills" />
        <div className="skills__content-wrapper">
            {
                skillsData.map((item,i)=>(
                    <div key={i} className="skills__content-wrapper__inner-content">
                        <Animate
                        play
                        duration={1}
                        delay={0.3}
                        start={{transform:'tranlateX(-200px)'}}
                        end={{transform:'tranlateX(0px)'}}>
                            <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                            <div>
                                {
                                    item.data.map((skillItem,j)=>(
                                        <AnimateKeyframes
                                        play
                                        duration={1}
                                        keyframes={["opacity: 1", "opacity: 0"]}
                                        iterationCount="1"
                                        >
                                            <div className="progressbar-wrapper" key={j}>
                                                <p>{skillItem.skillName}</p>

                                            </div>
                                        </AnimateKeyframes>

                                    ))
                                }
                            </div>
                        </Animate>
                    </div>
                ))
            }
        </div>
       </section>
        
    )
}
export default Skills;