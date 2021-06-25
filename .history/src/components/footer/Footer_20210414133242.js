import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap' 
import  './footer.css'

export default function Footer() {
    return (
      <Container fluid ="md">
        <Row  >
          <Col sm={8}>
            <div className="footer__contactanos">
              <h4>title</h4>

            <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>

          </Col>
          <Col sm={4}>
            <div className="footer__redes">
              <h3>Síguenos: </h3>

            </div>

          </Col>
        </Row>
      </Container>
    )
}
