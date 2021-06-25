import React from 'react'
import {Menuheader} from  './dates.js'
import './menu.css'

export default function Menu() {
    return (
            <div className="menuheader__container">

                <ul className="menu__list">
                {
                        Menuheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
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
