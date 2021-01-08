import React from 'react'
import "../stylesheets/Portfolio.css"
import "../stylesheets/ContainerTemplates.css"
import Iframe from "../Tools/Iframe";
import Project from "../Cards/Project";

class Portfolio extends React.Component {

    state = {
        current_tech: '',
        projects: [
            {
                id: 1,
                name: "Star Iron",
                tech: ["javascript", "ruby-rails"]
            },
            {
                id: 2,
                name: "Fluffy Tail",
                tech: ["rails"]
            },
            {
                id: 3,
                name: "Table Host",
                tech: ["react-js", "rails", "django"]
            },
            {
                id: 4,
                name: "Flatiron Furniture",
                tech: ["react-js", "ruby-rails"]
            },
            {
                id: 5,
                name: "Table Host",
                tech: ["react-js", "ruby-rails", "rails", "django"]
            },
            {
                id: 6,
                name: "Online Booking",
                tech: ["react-js"]
            },
            {
                id: 7,
                name: "ToDo Task Manager",
                tech: ["javascript"]
            },
        ]
    }

    componentDidMount() {
        this.setState({
            current_tech: "all"
        })
    }

    renderProjects = () => {
        if (this.state.current_tech === "all") {
            return this.state.projects.map(project => <Project key={project.id} project={project} />)
        } else {
            const projects = [...this.state.projects]
            const selectedProjects = projects.filter(project => project.tech.includes(this.state.current_tech))
            return selectedProjects.map(project => <Project key={project.id} project={project} />)
        }
    }

    onClickHandler = (e) => {
        this.setState({
            current_tech: e.target.id
        })
    }


    render() {
        console.log(this.state.current_tech)
        return(
            <div id="page-wrapper">
                <div className="buffer"></div>
                <div className="page-header">- PORTFOLIO -</div>
                <div id="content-wrapper-portfolio">
                    <ul id='technology-list'>
                        <li className={this.state.current_tech === "all" ?
                            "navbar-li-selected-tech" : 'navbar-tech'}
                            id="all"
                            onClick={this.onClickHandler}>
                            ALL
                        </li>
                        <li className={this.state.current_tech === "javascript" ?
                            "navbar-li-selected-tech" : 'navbar-tech'}
                            id="javascript"
                            onClick={this.onClickHandler}>
                            JAVASCRIPT
                        </li>
                        <li className={this.state.current_tech === "react-js" ?
                            "navbar-li-selected-tech" : 'navbar-tech'}
                            id="react-js"
                            onClick={this.onClickHandler}>
                            REACT-JS
                        </li>
                        <li className={this.state.current_tech === "ruby-rails" ?
                            "navbar-li-selected-tech" : 'navbar-tech'}
                            id="ruby-rails"
                            onClick={this.onClickHandler}>
                            RUBY/RAILS
                        </li>
                    </ul>
                    <div id="project-wrapper">
                        <Iframe id="portfolio-iframe" title="color_grid" source={"https://www.bengarlock.com:6325/"} />
                        <div id="project-grid-wrapper">
                            {this.renderProjects()}
                        </div>
                    </div>


                    {/*<div className="project-wrapper" id="fluffy-tail">FLUFFY TAIL</div>*/}
                    {/*<div className="project-wrapper" id="flatiron-furniture">FLATIRON FURNITURE</div>*/}
                    {/*<div className="project-wrapper" id="table-host">TABLE HOST</div>*/}
                    {/*<div className="project-wrapper" id="online-booking">ONLINE BOOKING</div>*/}
                    {/*<div className="project-wrapper" id="todo-task-manager">TASK MANAGER</div>*/}
                </div>
            </div>
        )
    }
}

export default Portfolio