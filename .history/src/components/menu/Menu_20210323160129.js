import React from 'react'
import email from '../../assets/icons/envelope.svg'
import whastApp from '../../assets/icons/whatsapp.svg'
import {MenuPreheader} from  './dates.js'
import './menu.css'

export default function Menu() {
    return (
            <div className="menu__container">

                <ul className="menu__list">
                {
                        MenuPreheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
                                <a>
                                    <img className="menu__icon" src={item.icon} alt={item.alt} height="26px" width="26px"></img>
                                </a>
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
