import React from 'react'
import "./stylesheets/App.css"
import Home from "./Containers/Home";
import About from "./Containers/About";

import { Element } from 'react-scroll'


class App extends React.Component {

    render() {
        return (
            <>
                <Element name="home">
                    <Home />
                </Element>
                <Element name="about">
                    <About />
                </Element>
            </>
        );
    }

}

export default App
