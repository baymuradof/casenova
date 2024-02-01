import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import modalImg2 from "@/shared/assets/img/equipment/modal-img-OLAT.png"
import modalImg from "@/shared/assets/img/equipment/modal-img.png"
import squareImg from "@/shared/assets/img/equipment/square.png"
import dermotologyImg from "@/shared/assets/img/services/dermotology.png"

export const HealiteComponent = () => {
	const { t } = useTranslation()
	return (
		<div className="machinery healite-2">
			<div className="machinery__middle_body">
				<h3 className="machinery__body--title">
					{t("LEDSystemForLowIntensity")}
				</h3>
				<p className="machinery__body--text">{t("HEALITELowIntensity")}</p>
				<h3 className="machinery__body--title">{t("ThreeWavelengths")}</h3>
				<div className="machinery__body--block">
					<div className="machinery__body--block--item">
						<Image src={squareImg} alt="square" />
						<p>{t("830(+590)нм")}</p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={squareImg} alt="square" />
						<p>{t("633нм")}</p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={squareImg} alt="square" />
						<p>{t("415нм")}</p>
					</div>
				</div>
				<div className="machinery__body--listscover">
					<h4 className="machinery__body--subtitle">{t("830(+590)нм")}</h4>
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p>{t("woundHealing")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("painRelief")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("painInMuscules")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("artritis")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("musculeSpasm")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("bloodCirculation")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("hairLoss")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("acne")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("scinRejuvenation")}</p>
						</li>
					</ul>
					<h4 className="machinery__body--subtitle">{t("633нм")}</h4>
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p>{t("scinRejuvenation")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("hairLoss")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("scinRejuvenation2")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("acneHealing")}</p>
						</li>
					</ul>

					<h4 className="machinery__body--subtitle">{t("415нм")}</h4>
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p>{t("activeAcne")}</p>
						</li>
					</ul>
				</div>

				<h3 className="machinery__body--title">{t("LookOnWorkHealite")}</h3>
				<div className="machinery__body--video">
					<iframe
						width="100%"
						height="100%"
						className="iframe"
						src="https://www.youtube.com/embed/rvNWJBUD-V4?si=NBK4UK3JuFHQNJuh"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<h3 className="machinery__body--title">{t("mainAdvantages")}</h3>
				<div className="machinery__body--listscover">
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p>{t("technologyOfConcentrated")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("technologyOfPhoto")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("comfortableScreen")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("fullControl")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("accessToUseLampBlock")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("deepInfluence")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("subcellularLevel")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("easyToUseWithOther")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("painless")}</p>
						</li>
					</ul>
				</div>
				<div className="machinery__body--box">
					<Image src={dermotologyImg} alt="dermotology" />
					<div className="machinery__body--box--desc">
						<p>{t("beforeCure")}</p>
						<p>{t("afterCure")}</p>
					</div>
				</div>
				<h4 className="machinery__body--subtitle">{t("MatrixTechnology")}</h4>
				<div>
					<p className="machinery__body--text">{t("MatrixTechnologyDesc")}</p>
					<div className="machinery__body--image">
						<Image src={modalImg} alt="OLAT image" />
					</div>
				</div>
				<h4 className="machinery__body--subtitle">{t("fullyRegulated")}</h4>
				<p className="machinery__body--text">{t("fullyRegulatedDesk")}</p>
				<h4 className="machinery__body--subtitle">
					{t("fullyRefulatedWithFocus")}
				</h4>
				<div>
					<Image src={modalImg2} alt="OLAT image" />
				</div>
				<h3 className="machinery__body--title">
					{t("overallInfoForUsability")}
				</h3>
				<div className="machinery__body--listscover">
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p>{t("acelerationOfWound")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("lessPain")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("ProfilacticsOfForming")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("LessHyperpigmentation")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("BetterOverAllStats")}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
