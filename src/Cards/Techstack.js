import React from 'react'
import "../stylesheets/Techstack.css"
import ReactTimeout from 'react-timeout'


class Techstack extends React.Component {

    state = {
        boxes: '',
    }

    componentDidMount = () => {
        this.setState({
            boxes: document.getElementsByClassName("tech-bubble"),
        })
    }

    randomColor = () => {
        const colors = [
            "#003f5f", "#4961b3",
            "#71749f", "#1c267a",
            "#53a2ca", "#6e7de2",
            "#19075f", "#294983",
            "#4f34a5", "#2e385d",
            "#075075", "#49518d",
            "#00a6ff", "#2a359b",
            "#125456", "#40355b",
        ]

        const min = 0
        const max = Math.floor(colors.length)
        const number = Math.floor(Math.random() * (max - min) + min);
        return colors[number]
    }


    hoverBackground = () => {
        const boxes = [...this.state.boxes]
        boxes.map(box => box.style.backgroundColor = this.randomColor())

    }


    render() {
        return(
            <div className="tech-bubble" onMouseOver={this.hoverBackground}
                 style={{
                     backgroundColor: this.randomColor()
                 }}
            >
                {this.props.technology.name}
            </div>
        )
    }
}

export default Techstack

