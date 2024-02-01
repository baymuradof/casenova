import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import HeroImg from "@/shared/assets/img/about/hero-img.png"

export const AboutUs = () => {
	const { t } = useTranslation()

	return (
		<div className="about">
			<div className="container">
				<div className="about__body">
					<h2 className="about__body--title">{t("aboutCaseNova")}</h2>
					<p className="about__body--text">{t("caseNovaBuiltIn2016")}</p>
					<div className="img_wrap">
						<Image src={HeroImg} alt="about" />
					</div>
				</div>
			</div>

			<div className="about__body--block">
				<div className="about__body--block--item">
					<h4>{t("11Years")}asdfjoasd</h4>
					<p>{t("makeBeautyOnFace")}adofoa</p>
				</div>
				<div className="about__body--block--item">
					<h4>{t("28Doctors")}asdf</h4>
					<p>{t("workOnYourFaceAndBody")}</p>
				</div>
				<div className="about__body--block--item">
					<h4>{t("14000Clients")}</h4>
					<p>{t("watchedOnMirror")}</p>
				</div>
			</div>
		</div>
	)
}
