import React from 'react'


class Project extends React.Component {

    render() {
        return(
            <div className="project-object">{this.props.project.name}</div>
        )
    }
}

export default Project