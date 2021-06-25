import React from 'react'
import {ListGroup, Container, Row, Col} from 'react-bootstrap' 
import  './footer.css'

export default function Footer() {
    return (
      <Container fluid>
        <Row  >
        <div className="footer__container">
          <Col sm={6}>
            <div className="footer__contactanos">
              <h4>title</h4>

            </div>

          </Col>
          <Col sm={6}>
            <div className="footer__redes">
              <h3>Síguenos: </h3>

            </div>

          </Col>
        </div>
        </Row>
      </Container>
    )
}
