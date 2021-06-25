import React from 'react'
import Menu from './menu/Menu'
import {Container, Row, Col} from 'react-bootstrap'
// import './preheader.css'

export default function preheader() {
    return (
        <Container fluid>
            <Row>
                <Col>

                <Menu></Menu>
                </Col>
                <Col>
                <button id="preheader__btn"> Consúltanos</button>

                </Col>

            </Row>
            <div className= "pre__navbar">
                {/* <Button id="preheader__button"  variant="danger">¡Consúltanos!</Button> */}
            </div>
        </Container>
    )
}
