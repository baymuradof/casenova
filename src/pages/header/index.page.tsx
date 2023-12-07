import Image from "next/image"
import React from "react"

import navImg from "@/shared/assets/img/nav-img.png"
import navLogoImg from "@/shared/assets/img/new-nav-logo.svg"

const HeaderPage = () => {
	return (
		<header className="header">
			<div className="container_lg header__container">
				<div id="menuBtn" className="menu__btn">
					<div className="menu__btn--burger"></div>
				</div>
				<a href="/" className="header__logo">
					<Image src={navLogoImg} alt="logo" />
				</a>
				<div id="headerMenu" className="header__menu">
					<ul className="list-reset header__menu-nav">
						<li className="header__menu-nav-list">
							<a
								className="header__menu-nav-list-link"
								href="services.html"
								data-i18n="services"
							></a>
						</li>
						<li className="header__menu-nav-list">
							<a
								className="header__menu-nav-list-link"
								href="about.html"
								data-i18n="aboutClinic"
							></a>
						</li>
						<li className="header__menu-nav-list">
							<a
								className="header__menu-nav-list-link"
								href="gallery.html"
								data-i18n="gallery"
							></a>
						</li>
						<li className="header__menu-nav-list">
							<a
								className="header__menu-nav-list-link"
								href="blog.html"
								data-i18n="blog"
							></a>
						</li>
						<li className="header__menu-nav-list">
							<a
								className="header__menu-nav-list-link"
								href="equipm.html"
								data-i18n="equipment"
							></a>
						</li>
						<li className="header__menu-nav-list">
							<a
								className="header__menu-nav-list-link"
								href="contacts.html"
								data-i18n="contacts"
							></a>
						</li>
					</ul>
					<ul className="header-dropdown-mobile" id="lang-dropdown-mobile">
						<li data-value="ru">РУС</li>
						<li data-value="en">ENG</li>
						<li data-value="uz">O&rsquo;ZB</li>
					</ul>
				</div>
				<div className="header__info">
					<select className="header-dropdown" id="lang-dropdown">
						<option value="ru" className="header-dropdown-option">
							РУС
						</option>
						<option value="en" className="header-dropdown-option">
							ENG
						</option>
						<option value="uz" className="header-dropdown-option">
							O&rsquo;ZB
						</option>
					</select>

					<ul className="list-reset header__info-nav">
						<li className="header__info-nav-phone">
							<a
								className="header__info-nav-phone-link"
								href="tel:998903908080"
							>
								+998 77-271-88-77
								{/* <!-- <span className="header__info-nav-phone-link-text" data-i18n="orderCall"></span> --> */}
							</a>
						</li>
					</ul>
				</div>
				<a href="tel:+998772718877" className="nav__btn">
					<Image src={navImg} alt="nav-img" />
				</a>
			</div>
		</header>
	)
}
export default HeaderPage
