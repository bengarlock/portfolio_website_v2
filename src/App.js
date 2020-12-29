import React from 'react'
import "./stylesheets/App.css"
import { Route } from 'react-router-dom'
import About from "./Containers/About";
import {NavLink} from "react-router-dom";



class App extends React.Component {

    render() {
        return (
            <div id="root-wrapper">
                <div id="header-wrapper">
                    <div id="name">Ben Garlock</div>
                    <NavLink className="menu-select" id="home" to="/">Home</NavLink>
                    <NavLink className="menu-select" id="about" to="/about">About</NavLink>
                    <NavLink className="menu-select" id="portfolio" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="menu-select" id="contact" to="/contact">Contact</NavLink>
                </div>

                <Route exact path='/about' render={ () => <About /> } />

            </div>
        );
    }

}

export default App;
