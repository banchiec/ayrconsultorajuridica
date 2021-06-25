import React from 'react'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
        <div className="menu__container">
            {
                    MenuPreheader.map((item) =>(
                            <a className={item.cName} href="#">{item.text}</a>
                    ))
            }
        </div>
    )
}
