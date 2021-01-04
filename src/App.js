import React from 'react'
import "./stylesheets/App.css"
import Home from "./Containers/Home";
import About from "./Containers/About";
import Navbar from "./Containers/Navbar";

import { Element } from 'react-scroll'


class App extends React.Component {


    render() {
        return (
            <>
                <Navbar />
                <Element name="home">
                    <Home name="home" />
                </Element>
                <Element name="about">
                    <About />
                </Element>
            </>
        );
    }

}

export default App
