import React from 'react';
import Iframe from "../Tools/Iframe";
import "../stylesheets/Home.css"
import { Link } from 'react-scroll'

class Home extends React.Component {

    onClickHandler = () => {
        this.props.changePage("about")
    }

    render() {
        return (
            <div className="home-wrapper">
                <Iframe title="galaxy" source={"https://www.bengarlock.com:6323/"} />

                <div id="welcome-box">
                    <div id="welcome-text">
                        <p id="hello-text">Hello.</p>
                        <p><span> My name is </span><span id="full-name"> Ben Garlock.</span></p>
                        <p>I'm a full-stack web developer.</p>
                        <Link to="about" smooth={true} spy={true} duration={1000}>
                            <p id="my-portfolio-button" onClick={this.onClickHandler}>Enter</p>
                        </Link>
                    </div>
                </div>

            </div>
        );
    }


};

export default Home;