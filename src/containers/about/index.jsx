import React from "react";
import PageHeaderContent from "../../components/pageHeaderContents";
import { Animate } from "react-simple-animate";
import './style.scss';

const About = () => {

    const personalDetails = [
        {
            label: "Name: ",
            value: "shivani kumari"
        },
        {
            label: "email: ",
            value: "shivanik475@gmail.com"
        },
        {
            label: "contact: ",
            value: "9953618958"
        },
        {
            label: "linkedin: ",
            value: ""
        },
        {
            label: "github: ",
            value: ""
        }
    ];

    const jobSummary = 'Experienced QA Lead with 8+ years in quality assurance, seeking to transition into a Frontend Developer role. Skilled in test planning, execution, and team leadership, with a strong passion for building responsive, user-friendly web applications. Proficient in React, JavaScript, and frontend technologies, eager to apply testing expertise and development skills to create exceptional user experiences.';


    return (
        <section id="about" className="about">
            <PageHeaderContent headerText="About Me" ></PageHeaderContent>
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{ opacity: 0, color: "#fff" }}
                        end={{ opacity: 1, color: "#000" }}
                    >
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(100vw)" }}
                        end={{ transform: "translateX(10px)" }}
                    >
                        <h3 className="personalInformationText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="title">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
            </div>
        </section>
    );
}

export default About;