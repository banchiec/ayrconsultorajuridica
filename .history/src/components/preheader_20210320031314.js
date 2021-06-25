import React from 'react'
import Menu from './menu/Menu'
import {Button} from 'react-bootstrap'
import './preheader.css'

export default function preheader() {
    return (
        <div className= "pre__navbar">
            <Menu></Menu>
             {/* <Button variant="warning">Warning</Button>{' '} */}
             <Button variant="outline-danger">¡ Consúltanos !</Button>{' '}
        </div>
    )
}
