import Image from "next/image"
import React from "react"

import HeroImg from "@/shared/assets/img/about/hero-img.png"

const AboutUsPage = () => {
	return (
		<div className="about">
			<div className="container">
				<div className="about__body">
					<h2 className="about__body--title" data-i18n="aboutCaseNova"></h2>
					<p className="about__body--text" data-i18n="caseNovaBuiltIn2016"></p>
					<div className="img_wrap">
						<Image src={HeroImg} alt="about" />
					</div>
				</div>
			</div>

			<div className="about__body--block">
				<div className="about__body--block--item">
					<h4 data-i18n="11Years">asdfjoasd</h4>
					<p data-i18n="makeBeautyOnFace">adofoa</p>
				</div>
				<div className="about__body--block--item">
					<h4 data-i18n="28Doctors">asdf</h4>
					<p data-i18n="workOnYourFaceAndBody"></p>
				</div>
				<div className="about__body--block--item">
					<h4 data-i18n="14000Clients"></h4>
					<p data-i18n="watchedOnMirror"></p>
				</div>
			</div>
		</div>
	)
}

export default AboutUsPage
