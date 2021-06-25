import React from 'react'
import {MenuPreheader} from  '../dates/dates'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './menu.css'
import { Form } from 'react-bootstrap'

export default function Menu() {
    return (
        <Router>
            <div className="menu__container">
                <ul>
                {
                        MenuPreheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
                                <Link href={item.url}>{item.text}</Link>
                            </li>
                        ))
                }
                </ul> 
            </div>
        </Router>
    )
}
