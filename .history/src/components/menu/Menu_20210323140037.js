import React from 'react'
import { FaBeer } from 'react-icons/fa'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
            <div className="menu__container">
                <ul className="menu__list">
                    
                {
                        MenuPreheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
                                <a href={item.url}>
                                    <svg className="bi bi-chevron-right"></svg>
                                    {item.text}
                                </a>
                            </li>
                        ))
                }
                </ul> 
            </div>
    )
}
