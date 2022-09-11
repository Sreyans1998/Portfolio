import React from "react";
import NavBar from "./NavBar";
import react from "../Images/React.png";
import angular from "../Images/Angular.png";
import nodejs from "../Images/NodeJS.png";
import javascript from "../Images/JavaScript.png";
import mongodb from "../Images/MongoDB.png";
import c from "../Images/C.png";
import sreyans from "../Images/sreyans.png";
import design1 from "../Images/design1.png";
import design2 from "../Images/design2.png";

const Home = () => {
    return (
        <>
            <div className = "home bg-color" Id="Home">
                <NavBar />
                <div className="home-content font-color">
                    <div className="headings">
                        <h1>Hi! I am Sreyans Ranjan.</h1>
                        <h2>A fullstack web developer and a programming enthusiast. </h2>
                    </div>
                    <div className="thumbnail-image">
                        <img src={design1} alt="" className="design1" width="250" />
                        <img src={design2} alt="" className="design2" width="350" />
                        <img src={sreyans} alt="" className="mypic" width="240" />
                    </div>
                </div>
                <div className="card">
                    <span><img src={react} alt="React" width="50" /></span>
                    <span><img src={angular} alt="Angular" width="50" /></span>
                    <span><img src={nodejs} alt="NodeJS" width="50" /></span>
                    <span><img src={javascript} alt="JavaScript" width="50" /></span>
                    <span><img src={mongodb} alt="MongoDB" width="50" /></span>
                    <span><img src={c} alt="C programing" width="50" /></span>
                    {/* <span><img src={} alt="" />Electron JS</span>
                    <span><img src={} alt="" />JavaScript</span> */}
                </div>
            </div>
        </>
    )
}

export default Home;