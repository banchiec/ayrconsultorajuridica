import React from 'react'
import {MenuPreheader} from  '../dates/dates'
import './menu.css'

export default function Menu() {
    return (
            <div className="menu__container">

                <ul className="menu__list">
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlinkhref="bootstrap-icons.svg#heart-fill"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlinkhref="bootstrap-icons.svg#toggles"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlinkhref="bootstrap-icons.svg#shop"/>
</svg>
                    <svg class="bi bi-chevron-right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
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
