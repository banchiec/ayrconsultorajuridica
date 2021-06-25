import React from 'react'
import './btnHamburguer.css'

export default function BtnHamburguer() {
    return (
        <div>
            	<div class="navigation">
			<input type="checkbox" id="navi-toggle" class="navigation__checkbox" />

			<label for="navi-toggle" class="navigation__button">
				<span class="navigation__icon">
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
				</span>
			</label>

			<div class="navigation__background">&nbsp;</div>

			<nav class="navigation__nav">
				<ul class="navigation__list">
					<li class="navigation__item">
						<a href="#" class="navigation__link">About Natours</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__link">Your Benefits</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__link">Popular Tours</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__link">Stories</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__link">Book Now</a>
					</li>
				</ul>
			</nav>
		</div>
    
    {/* <header class="header">
			<div class="header__text-box">
				<h1 class="heading-primary">
					<span class="heading-primary--main">Outdoors</span>
					<span class="heading-primary--sub">is where life happens</span>
				</h1>
				<a href="#" class="btn btn--white btn--animated">Discover Our Tours</a>
			</div>
		</header> */}

        </div>
    )
}
