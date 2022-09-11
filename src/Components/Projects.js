import React from "react";
import "../Scss/slide.css";

const Project = () => {
    
    return (
        <div className="">
            <div id="slider">
                <div className="slide">test</div>
                <div className="slide">test</div>
                <div className="slide">test</div>
                <div className="slide">test</div>
            </div>
            <div class="indicators">
                <span id="btn1" class="active"></span>
                <span id="btn2"></span>
                <span id="btn3"></span>
                <span id="btn4"></span>
            </div>
        </div>
    )
}

export default Project;