import React from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from '../../images/banner__mobile.png'
import './bannerMobile.css'

export default function BannerMobile() {
    return (
        <div className="banner__mobile__container"> 
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className="banner__item__title">Especializados en Extranjería</h1>
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
                    <h1 className="banner__item__title">Nacionalidad y Reagrupación familiar</h1>
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
                    <h1 className="banner__item__title">Conoce nuestro blog</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>           
        </div>
    )
}



