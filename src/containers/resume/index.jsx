import React from "react";
import PageHeaderContent from "../../components/pageHeaderContents";
import resume from '../../asset/Shivani_Resume.pdf'
import './style.scss'


const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent headerText="Resume"> </PageHeaderContent>
            <div className="resume__button-container">
                <button className="resume__download-button">
                    <a href={resume} download='resume'>Download Resume</a>
                </button>
            </div>
        </section>
    )
}
export default Resume;