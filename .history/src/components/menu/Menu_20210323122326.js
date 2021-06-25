import React from 'react'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
        <div className="menu__container">
            <ul>
            {
                <li><a>1</a></li>
                <li><a>2</a></li>
                    MenuPreheader.map((item) =>(
                        <li key={item.id} className={item.cName}>
                            <a href={item.url}>{item.text}</a>
                        </li>
                    ))
            }
            </ul> 
            <a href="https://www.google.es"> vamos google</a>
        </div>
    )
}
