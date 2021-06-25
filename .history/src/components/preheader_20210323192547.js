import React from 'react'
import Menu from './menu/Menu'
import {Button} from 'react-bootstrap'
import './preheader.css'

export default function preheader() {
    return (
        <div className= "pre__navbar">
            <Menu></Menu>
            <Button id="preheader__button" size="sm" variant="danger">¡Consúltanos!</Button>
        </div>
    )
}
