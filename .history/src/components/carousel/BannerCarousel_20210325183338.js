import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import image1 from '../../images/banner4.png'
import './BannerCarousel.css'


export default function BannerCarousel() {
    return (
        <div className="banner__container">

        {/* <Container> */}
           <Carousel fade className="banner__item">
                <Carousel.Item  interval={3000}> 
                    <img
                    className="banner__item d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Especializados en Extranjeria</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="banner__item d-block w-100 "
                    src={image1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="banner__item d-block w-100 "
                    src={image1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>o
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        {/* </Container> */}
        </div>
    )
}
