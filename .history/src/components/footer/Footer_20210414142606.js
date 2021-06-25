import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap' 
import  './footer.css'

export default function Footer() {
    return (
      <Container fluid className="footer__container">
        <Row  >
          <Col sm={8}>
            <div className="footer__contactanos">
              <span>A&R Consultora Jurídica 2021</span>
              <i class="far fa-copyright"></i>
            </div>

          </Col>
          <Col sm={4} >
            <div className="footer__redes">
              <div className="footer__container__icons">
                    <span>Síguenos: </span>
                    <a className="footer__icon__svg" href="https://www.facebook.com/AR-Consultora-Jur%C3%ADdica-105919904890193">
                        {/* <i class="fab fa-facebook-f fa-2x"></i> */}
                        <i className="fab  fa-facebook "></i>
                    </a>
                    <a className="footer__icon__svg__instagram" href="https://www.instagram.com/ayrconsultorajuridica/">
                        <i className="fab fa-instagram"></i>
                    </a>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    )
}
