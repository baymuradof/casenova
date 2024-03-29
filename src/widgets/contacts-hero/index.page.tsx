import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import messageIMg from "@/shared/assets/img/message.png"
import facebookImg from "@/shared/assets/img/svg/facebook.svg"
import instagramImg from "@/shared/assets/img/svg/instagram.svg"
import telegramImg from "@/shared/assets/img/svg/telegram.svg"
import wayImg from "@/shared/assets/img/way.png"

export const ContactsHero = () => {
	const { t } = useTranslation()
	return (
		<div className="contacts">
			<div className="container">
				<div className="contacts__body">
					<h2 className="contacts__body__title">{t("contacts")}</h2>
					<p className="contacts__body__text">{t("cameAsGuests")}</p>
					<div id="map"></div>
					<div className="contacts__body_info">
						<div className="contacts__body_info--item">
							<p>{t("address")}</p>
							<h3>{t("tashkentStr")}</h3>
							<a
								className="btn-link"
								href="https://yandex.com/navi/org/116023262801"
							>
								<button>
									<Image src={wayImg} alt="contacts" />
									<span>{t("continueRoute")}</span>
								</button>
							</a>
						</div>
						<div className="contacts__body_info--item">
							<p>{t("phoneList")}</p>
							<div className="contacts__body_info--item--nums">
								<a href="tel: +998712668833">+998 71 266 88 33</a>
								<a href="tel:+998712604044">+998 77 271 88 77</a>
							</div>
							<a className="btn-link" href="https://t.me/+998772718877">
								<button>
									<Image src={messageIMg} alt="contacts" />
									<span>{t("writeInTg")}</span>
								</button>
							</a>
						</div>
						<div className="contacts__body_info--socials">
							<p>{t("socialsList")}</p>
							<ul className="contacts__body_info--socials--list">
								<li>
									<a href="https://www.facebook.com/profile.php?id=100095283470258&mibextid=LQQJ4d">
										<Image src={facebookImg} alt="contacts" />
										<span>Facebook</span>
									</a>
								</li>
								<li>
									<a href="https://instagram.com/casenova.uz?igshid=MzRlODBiNWFlZA==">
										<Image src={instagramImg} alt="contacts" />
										<span>Instagram</span>
									</a>
								</li>
								<li>
									<a href="https://t.me/+998772718877">
										<Image src={telegramImg} alt="contacts" />
										<span>Telegram</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
