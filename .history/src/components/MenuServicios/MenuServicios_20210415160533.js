import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {dates} from './dateServicios.js'
import './menuServicios.css'

export default function MenuServicios() {
    return (
        <Container >
            <div>
                <h1>Servicios</h1>
                    <i className="fab  fa-2x  fa-facebook "></i>
            </div>

                    <Row >
                    {
                        dates.map((item)=>(
                            // <div className="menuServicios__container__item">
                                <Col>
                                    <div className={item.cName}>
                                        <Col sm={4}>
                                            {/* <h2>imagen</h2> */}
                                            <a>
                                                <i class={item.image}></i>
                    <i className="fab  fa-2x  fa-facebook "></i>
                                                {/* <i src={item.image} alt={item.alt}></i> */}
                                            </a>
                                        </Col>
                                        <Col sm={8}>
                                        <div className="menuServicios__container__info">
                                            <h1>{item.title}</h1>
                                            <i class="fas fa-house"></i>
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
