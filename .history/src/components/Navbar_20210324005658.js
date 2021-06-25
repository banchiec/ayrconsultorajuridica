import React, { useState, useEffect } from 'react'
import './navbar.css'
import Menu from './menu/Menu'
import logo from '../images/logov1.2.png'

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
            <img
                src={logo}
                alt="logo"
                className="nav__logo"/> 
            <div className="nav__contents">
                <Menu></Menu>
            </div>
        </div>
    )
}