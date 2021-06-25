import React from 'react'
import {Jumbotron ,Button} from 'react-bootstrap'
import './bienvenidos.css'

export default function Bienvenidos() {
    return (
        <div className="bienvenidos__container">
            <Jumbotron className="bienvenidos__jumbotron" >
                    <div className="bienvenidos__titulo__subrayado">
                        <h1>Bienvenidos </h1>
                        <div className="bienvenidos__subrayado"></div>
                    </div>
                    <p className="bienvenidos__texto">
                        Ponemos a tu disposición una amplia experiencia en materia de Extranjería, Nacionalidad, Inmigración.
                        Nuestros Abogados y Gestores forman parte de un gran equipo de especialistas.<br></br> <br></br>
                        La gran mayoría son de origen extranjero, por lo que nuestra empatía con el cliente es especial. <br></br> <br></br>Esto nos ha llevado a saber qué herramientas y alternativas debemos brindarte, además de conocer cuáles son las principales inquietudes de cualquier ciudadano extranjero.
                        Por todo ello, nos esforzamos día a día con el objetivo de mejorar y ofrecer a nuestros clientes la mejor labor posible.
                    </p>
                    <p className ="bienvenidos__texto__movil">
                        Ponemos a tu disposición una amplia experiencia en materia de Extranjería, Nacionalidad, Inmigración.
                        Nuestros Abogados y Gestores forman parte de un gran equipo de especialistas.<br></br> <br></br>
                    </p>
            </Jumbotron> 
        </div>
    )
}
