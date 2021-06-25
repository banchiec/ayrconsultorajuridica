import React from 'react'
import './whatsAppButton.css'
import whatsApp from '../../images/whatsApp.png'

export default function WhatsAppButton() {
    return (
        <div className="whatsApp__container">
            <a href="https://api.whatsapp.com/send?phone=+34622125922&text=Hola%20buenas%20d%C3%ADas,%20gracias%20por%20preferirnos,%20en%20que%20podemos%20ayudarte%20?">
                <img src={whatsApp}></img>
            </a>
            
        </div>
    )
}
