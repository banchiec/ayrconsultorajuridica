import React from 'react'
import { Carousel, Container,Button } from 'react-bootstrap'
import image1 from '../../images/banner5.png'
import image2 from '../../images/blog6.png'
import image3 from '../../images/nacionalidad.png'
import './BannerCarousel.css'


export default function BannerCarousel() {
    return (
        <div className="banner__container">

        <Container fluid>
           <Carousel fade className="banner__item">
                <Carousel.Item  interval={5000}> 
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="banner__caption">
                    <h1 className="banner__item__title">Especializados en Extranjeria</h1>
                    <p>Despacho de Gestores y Abogados  especializados en Extranjeria, Nacionalidad  e Inmigración.</p>
                    <Button >Consulta</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100 "
                    src={image3}
                    alt="Second slide"
                    />

                    <Carousel.Caption className="banner__caption">
                    <h1 className="banner__item__title">Nacionalidad y Reagrupacion Familiar</h1>
                    <p></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button >Contáctanos</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100 "
                    src={image2}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="banner__caption">
                    <h1 className="banner__item__title ">Conoce nuestro blog</h1>
                    <p>Disfruta de todo nuestro contenido sobre Extranjería</p>
                    <Button >Ir al blog</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </Container>
        </div>
    )
}
