import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import image1 from '../../images/banner.png'
import './BannerCarousel.css'


export default function BannerCarousel() {
    return (
        <div class u {
            constructor(params) {
                
            }
        }>

        {/* <Container> */}
           <Carousel fade>
                <Carousel.Item > 
                    <img
                    className="carousel__item d-block w-100 h-50"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-1"
                    src={image1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-10"
                    src={image1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        {/* </Container> */}
        </div>
    )
}
