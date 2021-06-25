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
                            <Col>
                            <div>
                                <h1>{item.title}</h1>
                            </div>
                            </Col>
                            <Col>
                            </Col>

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
