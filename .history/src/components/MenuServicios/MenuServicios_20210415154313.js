import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {dates} from './dateServicios.js'
import './menuServicios.css'

export default function MenuServicios() {
    return (
        <Container >
            <div>
                <h1>Servicios</h1>
            </div>

                    <Row >
                    {
                        dates.map((item)=>(
                            // <div className="menuServicios__container__item">
                                <Col>
                                    <div className={item.cName}>
                                        <Col sm={4}>
                                            <h2>imagen</h2>
                                            <i class="fas fa-2x fa-house"></i>
                                        </Col>
                                        <Col sm={8}>
                                        <div className="menuServicios__container__info">
                                            <h1>{item.title}</h1>
                                            <i class="fad fa-house"></i>
                                            <p>{item.texto}</p>
                                        </div>
                                        </Col>
                                    </div>
                                </Col>
                            // </div>
                        ))
                    }
                    </Row>

        </Container>
    )
}
