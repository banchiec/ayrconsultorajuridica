import React, { useState, useEffect } from 'react'
import './navbar.css'
// import { Row, Container, Col} from 'react-bootstrap'
import MenuNav from './menu/MenuNav'
import logo from '../images/logov1.3.png'
// import BannerCarousel from './carousel/BannerCarousel'
import BtnHamburguer from './btnhamburguer/BtnHamburguer'

export default function Navbar() {
    const [show, handleShow] = useState(false)
    
    const transitionNavbar = ()=> {
        if(window.scrollY > 100)
            handleShow(true)
        else
            handleShow(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar )
        return ()=> window.removeEventListener("scroll", transitionNavbar)
    }, [])

    return (
        // <div className= { `nav ${show && "nav__black"}` }>
            // <Container fluid>
                <div className="nav">
                {/* <Row> */}
                    {/* <Col> */}
                        <img
                            src={logo}
                            alt="logo"
                            className="nav__logo"/> 
                    {/* </Col> */}
                    {/* <Col> */}
                        <MenuNav></MenuNav>
                 <div className="menuheader__icon">
                    <a className="menuheader__icon__svg">
                        {/* <i class="fab fa-facebook-f fa-2x"></i> */}
                        <i className="fab  fa-2x  fa-facebook "></i>
                    </a>
                    <a className="menuheader__icon__svg__instagram">
                        <i className="fab fa-2x fa-instagram"></i>
                    </a>
                {/* <BtnHamburguer></BtnHamburguer> */}
                </div>
                    {/* </Col> */}

                {/* </Row> */}
                </div>
            // </Container>
    )
}