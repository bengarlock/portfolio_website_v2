import React from 'react'
import "./stylesheets/App.css"
import Home from "./Containers/Home";
import About from "./Containers/About";

class App extends React.Component {

    state = {
        current_href: ''
    }


    onClickHandler = (page) => {
        console.log(page)
    }


    render() {
        return (
            <div id="navbar" href={this.state.current_href}>
                <Home onClickHandler={this.onClickHandler}/>
                <About />
            </div>
        );
    }

}

export default App
