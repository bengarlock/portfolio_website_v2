import React from 'react'
import "../stylesheets/Navbar.css"
import { Link } from 'react-scroll'

class Navbar extends React.Component {


    render() {
        return(
            <div id="navbar-wrapper">
                <ul id="navbar-ul">
                    <Link to="home" smooth={true} spy={true} duration={1000}><li className='navbar-li'>HOME</li></Link>
                    <Link to="about" smooth={true} spy={true} duration={1000}><li className='navbar-li'>ABOUT</li></Link>
                    <Link to="portfolio" smooth={true} spy={true} duration={1000}><li className='navbar-li'>PORTFOLIO</li></Link>
                    <Link to="blog" smooth={true} spy={true} duration={1000}><li className='navbar-li'>BLOG</li></Link>
                    <Link to="contact" smooth={true} spy={true} duration={1000}><li className='navbar-li'>CONTACT</li></Link>
                </ul>
            </div>
        )
    }
}

export default Navbar