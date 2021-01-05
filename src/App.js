import React from 'react'
import "./stylesheets/App.css"
import Home from "./Containers/Home";
import About from "./Containers/About";

import { Element } from 'react-scroll'
import Navbar from "./Containers/Navbar";


class App extends React.Component {

    state = {
        current_page: ''
    }

    componentDidMount() {
        this.setState({
            current_page: "home"
        })
    }

    changePage = (page) => {
        this.setState({
            current_page: page
        })
    }


    render() {
        return (
            <div>
                {this.state.current_page === "home" ? null : <Navbar
                    changePage={this.changePage} currentPage={this.state.current_page}/>}
                <Element name="home">
                    <Home changePage={this.changePage} />
                </Element>
                <Element name="about">
                    <About changePage={this.changePage} />
                </Element>
            </div>
        );
    }

}

export default App
