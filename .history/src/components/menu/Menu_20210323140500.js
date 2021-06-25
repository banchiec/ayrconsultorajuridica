import React from 'react'
import { FaBeer } from 'react-icons/fa'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
            <div className="menu__container">
                <ul className="menu__list">
                    <svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#heart-fill"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#toggles"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#shop"/>
</svg>
                    
                {
                        MenuPreheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
                                <a href={item.url}>
                                    <svg className="bi" height="32" width="32">
                                        <use xlink:href="bootstrap-icons.svg#heart-fill" ></use>
                                    </svg>
                                    {item.text}
                                </a>
                            </li>
                        ))
                }
                </ul> 
            </div>
    )
}
