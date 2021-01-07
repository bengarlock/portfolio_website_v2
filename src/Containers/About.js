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
                        <div id="about-text">
                            <p style={{fontSize: "2em"}}>
                                About me
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>





                    </div>
                </div>
            </div>
        )
    }
}

export default About