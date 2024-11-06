import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContents";
import { Animate } from "react-simple-animate";
import './style.scss';

const About = () => {

    const personalDetails=[
        {
            label:"Name: ",
            value:"shivani kumari"
        },
        {
            label:"email: ",
            value:"shivanik475@gmail.com"
        },
        {
            label:"contact: ",
            value:"9953618958"
        },
        {
            label:"linkedin: ",
            value:""
        },
        {
            label: "github: ",
            value:""
        }
    ];

    const jobSummary='';

    
    return (
       <section id="about" className="about">
        <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40}/>}></PageHeaderContent>
        <div className="about__content">
            <div className="about__content__personalWrapper">
            <Animate
            play duration={1.5}
            delay={1}
            start={{transform:"translatex(-900px)"}}
            end={{transform:"translatex(0px)"}}
            >
        <h3>Front End Developer</h3>
        <p>{jobSummary}</p>
        </Animate>
        </div>
        <Animate
            play duration={1.5}
            delay={1}
            start={{transform:"translatex(500px)"}}
            end={{transform:"translatex(0px)"}}
            >
        <h3 className="personalInformationText">Personal Information</h3>
        <ul>
            {
                personalDetails.map((item, i)=> (
                    <li key={i}>
                        <span className="title">{item.label}</span>
                        <span className="title">{item.value}</span>
                    </li>
                ))
            }
        </ul>
        </Animate>
        </div>
       </section>
    );
}

export default About;