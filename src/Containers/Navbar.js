import React from 'react'
import "../stylesheets/Navbar.css"
import { Link } from 'react-scroll'

class Navbar extends React.Component {



    onClickHandler = (e) => {
        this.props.changePage(e.target.id)
    }

    render() {
        return(
            <div id="navbar-wrapper">

                <div id="menu-button">
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>


                <ul id="navbar-ul">
                    <Link to="home"
                          smooth={true}
                          spy={true}
                          duration={500}>
                        <li className={this.props.currentPage === "home" ? "navbar-li-selected" : 'navbar-li'}
                            id="home"
                            onClick={this.onClickHandler}>HOME</li>
                    </Link>
                    <Link to="about"
                          smooth={true}
                          spy={true}
                          duration={500}>
                        <li className={this.props.currentPage === "about" ? "navbar-li-selected" : 'navbar-li'}
                            id="about"
                            onClick={this.onClickHandler}>ABOUT</li>
                    </Link>
                    <Link to="portfolio"
                          smooth={true}
                          spy={true}
                          duration={500}>
                        <li className={this.props.currentPage === "portfolio" ? "navbar-li-selected" : 'navbar-li'}
                            id="portfolio"
                            onClick={this.onClickHandler}>PORTFOLIO</li>
                    </Link>
                    <Link to="blog"
                          smooth={true}
                          spy={true}
                          duration={500}>
                        <li className={this.props.currentPage === "blog" ? "navbar-li-selected" : 'navbar-li'}
                            id="blog"
                            onClick={this.onClickHandler}>BLOG</li>
                    </Link>
                    <Link to="contact"
                          smooth={true}
                          spy={true}
                          duration={500}>
                        <li className={this.props.currentPage === "contact" ? "navbar-li-selected" : 'navbar-li'}
                            id="contact"
                            onClick={this.onClickHandler}>CONTACT</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Navbar