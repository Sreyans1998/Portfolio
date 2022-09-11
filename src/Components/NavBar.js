import React from "react";
import logo from "../Images/s.png";

const NavBar = () => {
    return (
        <>
            <div className = "bg-color nav font-color">
                <img src={logo} width="50" alt="" />
                <ul className = "navbar">
                    <li className = "">
                        <a href="#Home">Home</a>
                    </li>
                    <li className = "">
                        <a href="#About">About</a>
                    </li>
                    <li className = "">
                        <a href="#Qualification">Qualification</a>
                    </li>
                    <li className = "">
                        <a href="../Home">Projects</a>
                    </li>
                    <li className = "">
                        <a href="../Home">Contact Me</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;