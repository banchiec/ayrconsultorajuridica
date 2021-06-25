import React from 'react'
import './whatsAppButton.css'
import whatsApp from '../../images/whatsApp.png'

export default function WhatsAppButton() {
    return (
        <div className="whatsApp__container">
            <a>
                <img src={whatsApp}></img>
            </a>
            
        </div>
    )
}
