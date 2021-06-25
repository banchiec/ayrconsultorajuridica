import React from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from '../../images/banner__mobile.png'
import img2 from '../../images/img3.png'
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
                    <p>Despacho de Gestores y Abogados  especializados en Extranjeria, Nacionalidad  e Inmigración.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src= {img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className="banner__item__title">Nacionalidad y Reagrupación familiar</h1>
                    <p>¿Llevas varios años en España de manera regular? Solicita tu Nacionalidad de la mano de expertos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={img2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className="banner__item__title">Conoce nuestro blog</h1>
                    <p>Disfruta de todo nuestro contenido sobre Extranjería</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>           
        </div>
    )
}



