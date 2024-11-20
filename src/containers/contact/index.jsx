import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContents";
import { Animate } from "react-simple-animate";
import './style.scss';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <PageHeaderContent headerText="Contact Me" ></PageHeaderContent>
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translatex(-200px)"
                    }}
                    end={{
                        transform: "translatex(0px)"
                    }}>
                    <h3 className="contact__content__header-text">Get in touch</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translatex(200px)"
                    }}
                    end={{
                        transform: "translatex(0px)"
                    }}>
                    <div className="contact__content_form">
                        <div className="contact__content_form__controlswrapper">
                            <div className="inputName">
                                <input required name="name" type="text" placeholder="Name" />
                            </div>
                            <div className="inputEmail">
                                <input required name="email" type="text" placeholder="Email" />
                            </div>
                            <div className="inputMobile">
                                <input required name="contact" type="text" placeholder="Mobile No" />
                            </div>
                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
            </div>
        </section>
    )
}
export default Contact;