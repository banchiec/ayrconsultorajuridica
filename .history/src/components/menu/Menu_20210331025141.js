import React from 'react'
import {MenuPreheader} from  './dates.js'
import './menu.css'

export default function Menu() {
    return (
            <div className="menu__container">

                <ul className="menu__list">
                {
                        MenuPreheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
                                <a href={item.url}>
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
