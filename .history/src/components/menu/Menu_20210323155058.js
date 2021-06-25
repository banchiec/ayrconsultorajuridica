import React from 'react'
import email from '../../assets/icons/envelope.svg'
import whastApp from '../../assets/icons/whatsapp.svg'
import {MenuPreheader} from  './dates.js'
import './menu.css'

export default function Menu() {
    return (
            <div className="menu__container">

                <ul className="menu__list">
                    <img src={email} alt="correo" height="22px" width="22px"></img>
                    <img src={whastApp} alt="correo" height="22px" width="22px"></img>
                {
                        MenuPreheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
                                <img src='./icons/enveloped.svg' alt={item.alt} height="22px" width="22px"></img>
                                <a href={item.url}>
                                    {item.text}
                                </a>
                            </li>
                        ))
                }
                </ul> 
            </div>
    )
}
