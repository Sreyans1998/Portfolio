import React from "react";
import aboutme from "../Images/AboutMe.mp4"

const About = () => {
    return (
        <div className="about" id="About">
            <div className="about-content">
                <div className="about-text">
                    <h1>
                        About Us
                    </h1>
                    <h2 style={{fontSize: "3rem", marginTop:"3rem" }}>&ldquo;</h2>
                    <p style={{margin:"-2rem 0 -1rem 1rem" }}>
                        I am a fuulstack developer looking for a dynamic opportunity to enhance and
                        utilize my learning, skills and knowledge gained
                        during my academic, B. tech (CSE). Tech-savvy and
                        a fast learner with innate communication skills and
                        have an eye for details. A people’s person and
                        possess the skills to present a service in a
                        professional manner.
                    </p>
                    <h2 style={{fontSize: "3rem", }}>&rdquo;</h2>
                </div>
                <div className="about-video">
                    <video width="500" autoPlay muted loop>
                        <source src={aboutme} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default About;