import React, { useState, useEffect } from 'react'
import './navbar.css'
import { Row, Container, Col} from 'react-bootstrap'
import MenuNav from './menu/MenuNav'
import logo from '../images/logov1.3.png'
import BannerCarousel from './carousel/BannerCarousel'

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
        <div className="nav">
            <Container>
                <Row>
                    <Col>
                        <img
                            src={logo}
                            alt="logo"
                            className="nav__logo"/> 
                    </Col>
                    <Col>
                        <div className="nav__contents">
                            <MenuNav></MenuNav>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}