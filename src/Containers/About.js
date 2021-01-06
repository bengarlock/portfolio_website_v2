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
                    <div className="header-box" id="third-thing">THIRD THING</div>
                    <div className="header-box" id="fourth-thing">FOURTH THING</div>
                    <div id="profile-wrapper">
                        <div id="profile-image-wrapper">
                            <img className="profile-photo" src={profile_photo} alt="profile_photo" />
                        </div>

                        <p>About me</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default About