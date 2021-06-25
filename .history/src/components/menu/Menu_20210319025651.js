import { Button } from 'bootstrap'
import React from 'react'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
        <div className="menu__container">
            {
                MenuPreheader.map((item)=>(
                    <h1 className={item.cName}>{item.text}</h1>
                ))
            }
        </div>
    )
}
