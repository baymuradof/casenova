import Image from "next/image"
import React from "react"

import services1Img from "@/shared/assets/img/services/1.png"
import services2Img from "@/shared/assets/img/services/2.png"
import services3Img from "@/shared/assets/img/services/3.png"
import services4Img from "@/shared/assets/img/services/4.png"
import services5Img from "@/shared/assets/img/services/5.png"
import services6Img from "@/shared/assets/img/services/6.png"
import services7Img from "@/shared/assets/img/services/7.png"

export const Services = () => {
	return (
		<div id="services" className="services">
			<div className="container-lg services__container">
				<div className="services__box">
					<div className="services__box-item border-radius-top-left">
						<Image src={services1Img} alt="servicesImg" />
						<p className="services__box-item-desc" data-i18n="cosmetology"></p>
					</div>

					<div className="services__box-item">
						<h3
							className="services__box-item-title"
							data-i18n="yourBeauty"
						></h3>
						<p
							className="services__box-item-subtitle"
							data-i18n="scienceBase"
						></p>
					</div>

					<div className="services__box-item">
						<Image src={services2Img} alt="servicesImg" />
						<p className="services__box-item-desc" data-i18n="laserDermo"></p>
					</div>

					<div className="services__box-item">
						<Image src={services3Img} alt="servicesImg" />
						<p className="services__box-item-desc" data-i18n="dermotology"></p>
					</div>

					<div className="services__box-item">
						<Image src={services4Img} alt="servicesImg" />
						<p className="services__box-item-desc" data-i18n="trixology"></p>
					</div>

					<div className="services__box-item border-radius-top-right">
						<Image src={services5Img} alt="servicesImg" />
						<p className="services__box-item-desc" data-i18n="apparatKos"></p>
					</div>

					<div className="services__box-item border-radius-bottom-left">
						<Image src={services6Img} alt="servicesImg" />
						<p
							className="services__box-item-desc"
							data-i18n="bodyCorrection"
						></p>
					</div>

					<div className="services__box-item border-radius-top-right">
						<Image src={services7Img} alt="servicesImg" />
						<p className="services__box-item-desc" data-i18n="esteticGin"></p>
					</div>

					<div className="services__box-item">
						<a href="services.html" className="services__box-item-more">
							<p
								style={{ textAlign: "start" }}
								className="services__box-item-more-title"
								data-i18n="lookServices"
							></p>
							<Image
								className="services__box-item-more-icon"
								src="img/arrow-down.svg"
								width={50}
								height={50}
								alt=""
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
