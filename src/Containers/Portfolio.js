import React from 'react'
import "../stylesheets/Portfolio.css"
import "../stylesheets/ContainerTemplates.css"
import Iframe from "../Tools/Iframe";

class Portfolio extends React.Component {

    state = {
        current_tech: '',
        projects: [
            {
                id: 1,
                name: "Star Iron",
                tech: ["javascript", "rails"]
            },
            {
                id: 2,
                name: "Fluffy Tail",
                tech: ["rails"]
            },
            {
                id: 3,
                name: "Table Host",
                tech: ["react", "rails", "django"]
            },
        ]
    }

    componentDidMount() {
        this.setState({
            current_tech: "all"
        })
    }

    renderProjects = () => {
        return null
    }

    onClickHandler = (e) => {
        this.setState({
            current_tech: e.target.id
        })
    }


    render() {
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