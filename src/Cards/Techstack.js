import React from 'react'
import "../stylesheets/Techstack.css"

class Techstack extends React.Component {

    randomColor = () => {
        const colors = [
            "#7c1818",
            "#0e2f99",
            "#5962ae",
            "#d0cb7a",
            "#8cca13",
        ]
        const min = 0
        const max = Math.floor(colors.length)
        const number = Math.floor(Math.random() * (max - min) + min);
        return colors[number]
    }

    render() {
        return(
            <div className="tech-bubble"
                 style={{
                     height: this.props.technology.project,
                     width: this.props.technology.projects,
                     padding: this.props.technology.projects,
                     backgroundColor: this.randomColor()
                 }}
            >
                {this.props.technology.name}
            </div>
        )
    }
}

export default Techstack

