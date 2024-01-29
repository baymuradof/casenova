import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import navImg from "@/shared/assets/img/nav-img.png"
import navLogoImg from "@/shared/assets/img/new-nav-logo.svg"

// @ts-ignore
import i18n from "../../../i18n"

export const Header = () => {
	const { t } = useTranslation()
	function handleChange(lang: string) {
		i18n.changeLanguage(lang)
	}
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
							<a className="header__menu-nav-list-link" href="services.html">
								{t("services")}
							</a>
						</li>
						<li className="header__menu-nav-list">
							<a className="header__menu-nav-list-link" href="about.html">
								{t("aboutClinic")}
							</a>
						</li>
						<li className="header__menu-nav-list">
							<a className="header__menu-nav-list-link" href="gallery.html">
								{t("gallery")}
							</a>
						</li>
						<li className="header__menu-nav-list">
							<a className="header__menu-nav-list-link" href="blog.html">
								{t("blog")}
							</a>
						</li>
						<li className="header__menu-nav-list">
							<a
								className="header__menu-nav-list-link"
								href="equipm.html"
								
							>{t("equipment")}</a>
						</li>
						<li className="header__menu-nav-list">
							<a
								className="header__menu-nav-list-link"
								href="contacts.html"
							>{t("contacts")}</a>
						</li>
					</ul>
					<ul className="header-dropdown-mobile" id="lang-dropdown-mobile">
						<li data-value="ru">РУС</li>
						<li data-value="en">ENG</li>
						<li data-value="uz">O&rsquo;ZB</li>
					</ul>
				</div>
				<div className="header__info">
					<select
						className="header-dropdown"
						id="lang-dropdown"
						onChange={(e) => handleChange(e.target.value)}
					>
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
