import Image from "next/image"
import React from "react"

import facebookImg from "@/shared/assets/img/facebook.png"
import instagramImg from "@/shared/assets/img/instagram.png"
import footerLogoImg from "@/shared/assets/img/new-footer-logo.svg"
import telegramImg from "@/shared/assets/img/telegram.png"

const FooterPage = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__box">
					<div className="footer__block">
						<div className="footer__block--nums">
							<a href="tel:+998-71-266-88-33">+998 71 266 88 33</a>
							<a href="tel:+998-77-271-88-77">+998 77 271 88 77</a>
						</div>
						<a href="#" className="footer__block--logo">
							<Image src={footerLogoImg} alt="logo" />
						</a>
						<div className="footer__block--socials">
							<h4 data-i18n="tashkent124B"></h4>
							<div className="footer__block--socials--list">
								{/* <a
									href="https://www.facebook.com/people/Case-Nova/100095283470258/?mibextid=LQQJ4d"
									target="_blank"
								>  */}
								<a
									href="https://www.facebook.com/people/Case-Nova/100095283470258/?mibextid=LQQJ4d"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image src={facebookImg} alt="facebook" />
								</a>
								{/* <a
									href="https://www.instagram.com/casenova.uz/?igshid=MzRlODBiNWFlZA%3D%3D"
									target="_blank"
								> */}
								<a
									href="https://www.instagram.com/casenova.uz/?igshid=MzRlODBiNWFlZA%3D%3D"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image src={instagramImg} alt="instagram" />
								</a>
								{/* <a href="https://t.me/casenovaclinic" target="_blank">
									<Image src={telegramImg} alt="telegram" />
								</a> */}
								<a
									href="https://t.me/casenovaclinic"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image src={telegramImg} alt="Telegram" />
								</a>
							</div>
						</div>
					</div>
					<div className="footer__inner">
						<div className="logo">
							<a href="/" className="footer__inner--logo">
								<Image className="footer-logo" src={footerLogoImg} alt="logo" />
							</a>
						</div>
						<a href="services.html" data-i18n="services"></a>
						<a href="about.html" data-i18n="aboutClinic"></a>
						<a href="gallery.html" data-i18n="gallery"></a>
						<a href="blog.html" data-i18n="blog"></a>
						<a href="contacts.html" data-i18n="contacts"></a>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default FooterPage
