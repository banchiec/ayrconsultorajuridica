import React from 'react'
import Menu from './menu/Menu'
import './preheader.css'

export default function preheader() {
    return (
        <div className= "pre__navbar">
            <Menu></Menu>
            <button className="btn__preheader">
                Consultanos 
            </button>
        </div>
    )
}
