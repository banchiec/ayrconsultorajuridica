import React from 'react'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
        <div className="menu__container">
            <ul>
            {
                    MenuPreheader.map((item) =>(
                        <li>
                            <a key={item.id} className={item.cName} >{item.text}</a>
                        </li>
                    ))
            }
            </ul> 
        </div>
    )
}
