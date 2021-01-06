import React from "react"
import "../stylesheets/About.css"
import "../stylesheets/ContainerTemplates.css"

class About extends React.Component {



    render() {
        return(
            <div id="page-wrapper">
                <div className="buffer"></div>
                <div className="page-header">- ABOUT -</div>
                <div className="content-wrapper">
                    <div className="header-box" id="technology">TECHNOLOGY</div>
                    <div className="header-box" id="experience">EXPERIENCE</div>
                    <div className="header-box" id="third-thing">THIRD THING</div>
                    <div className="header-box" id="fourth-thing">FOURTH THING</div>

                </div>
            </div>
        )
    }
}

export default About