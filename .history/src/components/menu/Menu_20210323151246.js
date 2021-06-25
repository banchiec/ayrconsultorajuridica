import React from 'react'
import email from '../../assets/icons/envelope.svg'
import whastApp from '../../assets/icons/whatsapp.svg'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
            <div className="menu__container">

                <ul className="menu__list">
                    <img src={email} alt="correo" height="22px" width="22px"></img>
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
