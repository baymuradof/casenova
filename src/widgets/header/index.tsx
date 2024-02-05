import Image from "next/image"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import navImg from "@/shared/assets/img/nav-img.png"
import navLogoImg from "@/shared/assets/img/new-nav-logo.svg"

// @ts-ignore
import i18n from "../../../i18n"

export const Header = () => {
	const { t } = useTranslation()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleChange = (lang: string) => {
		i18n.changeLanguage(lang)
	}

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className={`header ${isMenuOpen ? "headerCover" : ""}`}>
			<div className="container_lg header__container">
				<div
					id="menuBtn"
					className={`menu__btn ${isMenuOpen ? "open" : ""}`}
					onClick={handleMenuClick}
				>
					<div className="menu__btn--burger"></div>
				</div>
				<a href="/" className="header__logo">
					<Image src={navLogoImg} alt="logo" />
				</a>
				<div
					id="headerMenu"
					className={`header__menu ${isMenuOpen ? "openNav" : ""}`}
				>
					<ul className="list-reset header__menu-nav">
						<li className="header__menu-nav-list">
							<a className="header__menu-nav-list-link" href="servicess">
								{t("services")}
							</a>
						</li>
						<li className="header__menu-nav-list">
							<a className="header__menu-nav-list-link" href="about">
								{t("aboutClinic")}
							</a>
						</li>
						<li className="header__menu-nav-list">
							<a className="header__menu-nav-list-link" href="gallery">
								{t("gallery")}
							</a>
						</li>
						<li className="header__menu-nav-list">
							<a className="header__menu-nav-list-link" href="blog">
								{t("blog")}
							</a>
						</li>
						<li className="header__menu-nav-list">
							<a className="header__menu-nav-list-link" href="equipment">
								{t("equipment")}
							</a>
						</li>
						<li className="header__menu-nav-list">
							<a className="header__menu-nav-list-link" href="contacts">
								{t("contacts")}
							</a>
						</li>
					</ul>
					<ul className="header-dropdown-mobile" id="lang-dropdown-mobile">
						<li onClick={() => handleChange("ru")} data-value="ru">
							РУС
						</li>
						<li onClick={() => handleChange("en")} data-value="en">
							ENG
						</li>
						<li onClick={() => handleChange("uz")} data-value="uz">
							O&rsquo;ZB
						</li>
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
