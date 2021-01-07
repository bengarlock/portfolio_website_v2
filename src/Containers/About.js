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
                        <p style={{fontSize: "2em", textAlign:"center"}}>
                            A little about me...
                        </p>
                        <p>
                            <br />
                            <p>
                                I'm a full stack developer based out of New York.  I have sixteen years of
                                experience working in the Technology Industry, most notably with &nbsp;
                                <a href="https://www.opentable.com" target="_blank">OpenTable. </a>
                            </p>

                            <p>
                                I believe in writing clean and efficient code that can scale. I also understand the need
                                to deliver features to market quickly. If you'd like to have a conversation, please feel
                                free to contact me.
                            </p>
                        </p>
                    </div>
                    <div id="tech-stack">

                    </div>





                </div>

            </div>
        )
    }
}

export default About