import React from 'react'
import './whatsAppButton.css'
import whatsApp from '../../images/whatsApp.png'

export default function WhatsAppButton() {
    return (
        <div className="whatsApp__container">
            <a href="https://api.whatsapp.com/send?phone=+622125922&text=Hola%20buenas%20d%C3%ADas,%20necesito%20ayuda%20,%20podr%C3%ADas%20ayudarme?">
                <img src={whatsApp}></img>
            </a>
            
        </div>
    )
}
