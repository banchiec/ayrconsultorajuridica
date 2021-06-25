import React from 'react'
import Menu from './menu/Menu'
import {Button} from 'react-bootstrap'
import './preheader.css'

export default function preheader() {
    return (
        <div className= "pre__navbar">
            <Menu></Menu>
             <Button variant="warning">Warning</Button>{' '}
            <button className="btn__preheader">
                Consultanos 
            </button>
        </div>
    )
}