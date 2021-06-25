import React from 'react'
import { FaBeer } from 'react-icons/fa'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
            <div className="menu__container">

                <ul className="menu__list">
                    <i class="bi bi-arrow-down-left-square"></i>
                {
                        MenuPreheader.map((item) =>(
                            <li key={item.id} className={item.cName}>
                                <a href={item.url}>
                                    {/* <i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i> */}
                                    {/* <svg className="bi bi " height="32" width="32">
                                        <use xlinkHref="bootstrap-icons.svg#heart-fill" ></use>
                                    </svg> */}
                                    {item.text}
                                </a>
                            </li>
                        ))
                }
                </ul> 
            </div>
    )
}
