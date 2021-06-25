import React from 'react'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'
import { Form } from 'react-bootstrap'

export default function Menu() {
    return (
            <div className="menu__container">
                <ul>
                {
                        MenuPreheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
                                <Link to='/' href={item.url}>{item.text}</Link>
                            </li>
                        ))
                }
                </ul> 
            </div>
    )
}
