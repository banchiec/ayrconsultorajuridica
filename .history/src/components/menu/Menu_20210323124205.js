import React from 'react'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
            <div className="menu__container">
                <ul>
                {
                        MenuPreheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
                                <a to='/' href={item.url}>{item.text}</a>
                            </li>
                        ))
                }
                </ul> 
            </div>
    )
}
