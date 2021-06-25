import React from 'react'
import {Menuheader} from  './dates.js'
import './menu.css'

export default function Menuheader() {
    return (
            <div className="menuheader__container">

                <ul className="menuheader__list">
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
