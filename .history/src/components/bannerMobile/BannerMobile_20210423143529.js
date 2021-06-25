import React from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from '../../images/banner__mobile.png'

export default function BannerMobile() {
    return (
        <div> 
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="banner__item__title">Especializados en Extranjería</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src= {img1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="banner__item__title">Nacionalidad y Reagrupación familiar</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={img1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="banner__item__title">Conoce nuestro blog</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>           
        </div>
    )
}



