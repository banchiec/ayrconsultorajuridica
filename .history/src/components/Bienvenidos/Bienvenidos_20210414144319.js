import React from 'react'
import {Jumbotron ,Button} from 'react-bootstrap'

export default function Bienvenidos() {
    return (
        <div className="bienvenidos__container">
            <Jumbotron >
                    <h1>Bienvenidos </h1>
                    <div className="bienvenidos__subrayado"></div>
                    <p>
                        En GEMOVIR ponemos a tu disposición una amplia experiencia en materia de Extranjería, Nacionalidad, Inmigración y Negocios Internacionales.
                        Nuestros Abogados, Gestores y Economistas forman parte de un gran equipo de especialistas. La gran mayoría son de origen extranjero, por lo que nuestra empatía con el cliente es especial. Esto nos ha llevado a saber qué herramientas y alternativas debemos brindarte, además de conocer cuáles son las principales inquietudes de cualquier ciudadano extranjero.
                        Por todo ello, nos esforzamos día a día con el objetivo de mejorar y ofrecer a nuestros clientes la mejor labor posible.
                    </p>
                    <p>
                    </p>
            </Jumbotron> 
        </div>
    )
}
