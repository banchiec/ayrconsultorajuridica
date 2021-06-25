import React from 'react'
import { Carousel, Container,Button } from 'react-bootstrap'
import image1 from '../../images/banner4.png'
import './BannerCarousel.css'


export default function BannerCarousel() {
    return (
        <div className="banner__container">

        {/* <Container> */}
           <Carousel fade className="banner__item">
                <Carousel.Item  interval={3000}> 
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="banner__caption">
                    <h1 className="banner__item__title">Especializados en Extranjeria</h1>
                    <Button>Consulta</Button>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 "
                    src={image1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className="banner__item__title">Extranjería y Nacionalidad</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button>Contáctanos</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 "
                    src={image1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className="banner__item__title ">Conoce nuestro blog</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Button>Ir al blog</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        {/* </Container> */}
        </div>
    )
}
