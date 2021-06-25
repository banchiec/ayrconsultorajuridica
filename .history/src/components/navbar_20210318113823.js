import React, { useState, useEffect } from 'react'
import './navbar.css'
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
        <div className= {`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                src={logo}
                // alt="logo"
                className="nav__logo"></img> 
                <div className="nav__menu">
                    <ul>
                        <li>Inicio</li>
                        <li>Series TV</li>
                        <li>Películas</li>
                        <li>Novedades más vistas</li>
                        <li>Mi lista</li>
                        <li>Ver de nuevo</li>
                    </ul>
                </div>
                {/* <img 

                alt="user"
                className="nav__avatar"/> */}
            </div>
        </div>
    )
}