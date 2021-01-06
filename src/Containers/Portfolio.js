import React from 'react'
import "../stylesheets/Portfolio.css"
import "../stylesheets/ContainerTemplates.css"

class Portfolio extends React.Component {



    render() {
        return(
            <div id="page-wrapper">
                <div className="buffer"></div>
                <div className="page-header">- PORTFOLIO -</div>
                <div className="content-wrapper">
                    <ul id='technology'>
                        <li>ALL</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT-JS</li>
                        <li>RUBY/RAILS</li>
                    </ul>
                    <div className="header-box" id="star-iron">STAR IRON</div>
                    <div className="header-box" id="fluffy-tail">FLUFFY TAIL</div>
                    <div className="header-box" id="flatiron-furniture">FLATIRON FURNITURE</div>
                    <div className="header-box" id="table-host">TABLE HOST</div>
                    <div className="header-box" id="online-booking">ONLINE BOOKING</div>
                    <div className="header-box" id="todo-task-manager">TASK MANAGER</div>
                </div>
            </div>
        )
    }
}

export default Portfolio