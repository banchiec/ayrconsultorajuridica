import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {dates} from './dateServicios.js'

export default function MenuServicios() {
    return (
        <Container>
            <div>
                <h1>Servicios</h1>
            </div>
            {
                dates.map((item)=>(

                    <Row>
                        <Col>
                            <div className={item.cName}>
                                <Col sm={4}>
                                    <h1>imagen</h1>
                                </Col>
                                <Col sm={8}>
                                <div>
                                    <h1>{item.title}</h1>
                                </div>
                                </Col>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h1>{item.title}</h1>
                            </div>
                        </Col>
                    </Row>
                )
                )

            }
        </Container>
    )
}
