import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import dates from './dateServicios'

export default function MenuServicios() {
    return (
        <Container>
            <div>
                <h1>Servicios</h1>
            </div>
            {
                dates.map((item)=>{
                    
                    <Row>
                        <Col>
                         <h1></h1>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                })

            }
        </Container>
    )
}
