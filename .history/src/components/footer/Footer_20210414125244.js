import React from 'react'
import {ListGroup, Container, Row, Col} from 'react-bootstrap' 
import  './footer.css'

export default function Footer() {
    return (
      <Container fluid>
        <Row  >
          <Col lg ={6}>
          <ListGroup className="footer__list" 
            // variant="flush"
          >
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup> 
          </Col>
          <Col lg={6}>
          <ListGroup className="footer__list" 
            // variant="flush"
          >
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup> 
          </Col>
        </Row>
        <div className="footer__container">
          <h1> title</h1>




        </div>
      </Container>
    )
}
