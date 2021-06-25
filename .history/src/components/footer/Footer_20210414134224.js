import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap' 
import  './footer.css'

export default function Footer() {
    return (
      <Container fluid ="md" className="footer__container">
        <Row  >
          <Col sm={8}>
            <div className="footer__contactanos">
              <h4>title</h4>

            </div>

          </Col>
          <Col sm={4}>
            <div className="footer__redes">
              <span>Síguenos: </span>

            </div>

          </Col>
        </Row>
      </Container>
    )
}
