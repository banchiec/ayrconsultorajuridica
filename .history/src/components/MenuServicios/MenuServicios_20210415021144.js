import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {dates} from './dateServicios.js'
import './menuServicios.css'

export default function MenuServicios() {
    return (
        <Container fluid>
            <div>
                <h1>Servicios</h1>
            </div>
            {
                dates.map((item)=>(

                    <Row>
                        <Col sm={6} >
                            {/* <div className={item.cName}> */}
                                <Col sm={4}>
                                    <h1>imagen</h1>
                                </Col>
                                <Col sm={8}>
                                <div>
                                    <h1>{item.title}</h1>
                                </div>
                                </Col>
                            {/* </div> */}
                        </Col>
                        <Col  sm={6}>
                            {/* <div className={item.cName}> */}
                                <Col sm={4}>
                                    <h1>imagen</h1>
                                </Col>
                                <Col sm={8}>
                                <div>
                                    <h1>{item.title}</h1>
                                </div>
                                </Col>
                            {/* </div> */}
                        </Col>
                    </Row>
                )
                )

            }
        </Container>
    )
}
