import React from 'react'
import './btnHamburguer.css'

export default function BtnHamburguer() {
    return (
        <div>
         	<div className="navigation">
			<input type="checkbox" id="navi-toggle" className="navigation__checkbox" />

			<label for="navi-toggle" className="navigation__button">
				<span className="navigation__icon">
					<span className="navigation__icon-span">&nbsp;</span>
					<span className="navigation__icon-span">&nbsp;</span>
					<span className="navigation__icon-span">&nbsp;</span>
					<span className="navigation__icon-span">&nbsp;</span>
					<span className="navigation__icon-span">&nbsp;</span>
					<span className="navigation__icon-span">&nbsp;</span>
				</span>
			</label>

			<div className="navigation__background">&nbsp;</div>

			<nav className="navigation__nav">
				<ul className="navigation__list">
					<li className="navigation__item">
						<a href="#" className="navigation__link">HOME</a>
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">A&R BLOG</a>
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">SOBRE NOSOTROS</a>
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">CONTACTO</a>
					</li>
					{/* <li className="navigation__item">
						<a href="#" className="navigation__link">Book Now</a>
					</li> */}
				</ul>
			</nav>
		</div>
    
    {/* <header className="header">
			<div className="header__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary--main">Outdoors</span>
					<span className="heading-primary--sub">is where life happens</span>
				</h1>
				<a href="#" className="btn btn--white btn--animated">Discover Our Tours</a>
			</div>
		</header> */}

        </div>
    )
}
