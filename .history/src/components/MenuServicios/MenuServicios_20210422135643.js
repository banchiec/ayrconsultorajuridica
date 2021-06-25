import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {dates} from './dateServicios.js'
import './menuServicios.css'

export default function MenuServicios() {
    return (
        <Container >
                <h1>Servicios</h1>
                    <Row >
                    {
                        dates.map((item)=>(
                                <Col className={item.cName}>
                                    {/* <div className={item.cName}> */}
                                        <Col sm={4}>
                                            <a className="menuServicio__container__link__icon" alt ={item.alt}>
                                                <i class={item.image}></i>
                                            </a>
                                        </Col>
                                        <Col sm={8}>
                                            <div className="menuServicios__container__info">
                                                <h1>{item.title}</h1>
                                                <p>{item.texto}</p>
                                            </div>
                                        </Col>
                                    {/* </div> */}
                                    <div className="subrayado__servicios">
                                    </div>
                                </Col>
                        ))
                    }
                    </Row>
        </Container>
    )
}
