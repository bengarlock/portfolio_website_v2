import React from "react"
import "../stylesheets/About.css"
import "../stylesheets/ContainerTemplates.css"
import profile_photo from "../media/profile_photo.jpg"

class About extends React.Component {



    render() {
        return(
            <div id="page-wrapper">
                <div className="buffer"></div>
                <div className="page-header">- ABOUT -</div>

                <div className="content-wrapper-about">
                    <div className="header-box" id="technology">TECHNOLOGY</div>
                    <div className="header-box" id="experience">EXPERIENCE</div>
                    <div className="header-box" id="innovation">INNOVATION</div>
                    <div className="header-box" id="reliability">RELIABILITY</div>
                </div>

                <div id="profile-wrapper">
                    <div id="profile-image-wrapper">
                        <img className="profile-photo" src={profile_photo} alt="profile_photo" />
                    </div>
                    <div id="about-text">
                        <p style={{fontSize: "2em"}}>
                            A little about me...
                        </p>
                        <p>
                            <br />
                            <p>I'm a full stack developer based out of New York.  I have sixteen years of
                            experience working in the Technology Industry, most notably with &nbsp;
                                <a href="https://www.opentable.com" target="_blank">OpenTable. </a> &nbsp; I've spent
                                a good deal of time working with restaurant hospitality groups like NOHO, Momofuku,
                                and many others.
                            </p>
                        </p>
                    </div>





                </div>

            </div>
        )
    }
}

export default About