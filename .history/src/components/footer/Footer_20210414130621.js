import React from 'react'
import {ListGroup, Container, Row, Col} from 'react-bootstrap' 
import  './footer.css'

export default function Footer() {
    return (
      <Container fluid>
        <Row  >
        <div className="footer__container">
          <Col sm={8}>
            <div className="">

            </div>

          </Col>
          <Col sm={4}>
            <div className="footer__redes"></div>

          </Col>
        </div>
        </Row>
      </Container>
    )
}
