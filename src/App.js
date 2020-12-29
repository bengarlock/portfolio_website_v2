import React from 'react'
import "./stylesheets/App.css"
import {NavLink} from "react-router-dom";
import backgroundImage1 from "./media/background1.jpg"


class App extends React.Component {

    componentDidMount() {
        const rootWrapper = document.getElementById("root-wrapper")
        rootWrapper.style.backgroundImage = backgroundImage1
    }

    render() {
        return (
            <div id="root-wrapper">
                <div id="header-wrapper">
                    <div id="name">Ben Garlock</div>
                    <NavLink className="menu-select" id="home" to="/">Home</NavLink>
                    <div className="menu-select" id="about" to="/about">About</div>
                    <NavLink className="menu-select" id="portfolio" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="menu-select" id="contact" to="/contact">Contact</NavLink>

                    <div id="hello">
                        <p style={{fontSize: "100px"}}>Hello. </p>
                        <p>My name is <span style={{color: "red"}}>Ben Garlock.</span></p>
                        <p>I'm a full-stack web developer</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
