import React from 'react'
import {ListGroup} from 'react-bootstrap' 
import  './footer.css'

export default function Footer() {
    return (
        <div className="footer__container">

          <ListGroup 
          variant="flush"
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
        </div>
    )
}
