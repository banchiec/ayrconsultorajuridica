import React from 'react'
import {Menuheader} from  './dates.js'
import instagram from '../icons/instagram.svg'
import './menuNav.css'

export default function MenuNav() {
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
                <a>
                    <img alt="instagram" src={instagram} width="26px" height="26px"></img>
                </a>
            </div>
    )
}
