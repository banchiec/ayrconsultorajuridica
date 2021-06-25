import React from 'react'
import { Carousel, Container,Button } from 'react-bootstrap'
import image1 from '../../images/banner5.png'
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
                    <p>Despacho de Gestores y Abogados  especializados en Extranjeria, Nacionalidad <br/> e Inmigración.</p>
                    <Button className="banner__btn">Consulta</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 "
                    src={image1}
                    alt="Second slide"
                    />

                    <Carousel.Caption className="banner__caption">
                    <h1 className="banner__item__title">Extranjería y Nacionalidad</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button className="banner__btn">Contáctanos</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 "
                    src={image1}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="banner__caption">
                    <h1 className="banner__item__title ">Conoce nuestro blog</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button>Ir al blog</button>
                    <Button className="banner__btn" >Ir al blog</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        {/* </Container> */}
        </div>
    )
}
