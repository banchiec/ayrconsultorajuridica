import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap' 
import  './footer.css'

export default function Footer() {
    return (
      <Container  className="footer__container">
        <Row  >
          <Col sm={8}>
            <div className="footer__contactanos">
              <h4>title</h4>

            </div>

          </Col>
          <Col sm={4}>
            <div className="footer__redes">
              <span>Síguenos: </span>
              <div className="footer__container__icons">
                <div className="menuheader__icon">
                    <a className="menuheader__icon__svg" href="https://www.facebook.com/AR-Consultora-Jur%C3%ADdica-105919904890193">
                        {/* <i class="fab fa-facebook-f fa-2x"></i> */}
                        <i className="fab  fa-2x  fa-facebook "></i>
                    </a>
                    <a className="menuheader__icon__svg__instagram" href="https://www.instagram.com/ayrconsultorajuridica/">
                        <i className="fab fa-2x fa-instagram"></i>
                    </a>
                {/* <BtnHamburguer></BtnHamburguer> */}
                </div>

              </div>
            </div>

          </Col>
        </Row>
      </Container>
    )
}
