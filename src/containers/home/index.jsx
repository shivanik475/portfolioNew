import React from "react";
import { useNavigate } from "react-router-dom";
import './style.scss';

const Home = () => {
    const navigate=useNavigate();
    console.log(navigate);

    const handleNavigateToContactMePage =() =>{
        navigate('/contact')

    }
    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Shivani <br />Front end developer
                </h1>
            </div>
            <div className="home__contact-me">
                <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            </div>
        </section>
    )
}
export default Home;