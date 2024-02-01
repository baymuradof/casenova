import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import end1Img from "@/shared/assets/img/equipment/end1.png"
import end2Img from "@/shared/assets/img/equipment/end2.png"
import end3Img from "@/shared/assets/img/equipment/end3.png"
import end4Img from "@/shared/assets/img/equipment/end4.png"
import dermotologyImg from "@/shared/assets/img/services/dermotology.png"

export const LutronicGeniusComponent = () => {
	const { t } = useTranslation()
	return (
		<div className="machinery healite-2">
			<div className="machinery__middle_body">
				<h3 className="machinery__body--title">{t("newestBiPolar")}</h3>
				<p className="machinery__body--text">{t("LutronicGeniusIs")}</p>
				<h3 className="machinery__body--title">{t("FourTypesOfNeedles")}</h3>
				<div className="machinery__body--block">
					<div className="machinery__body--block--item3">
						<Image src={end1Img} alt="square" />
						<div>
							<h4 className="machinery__body--subtitle">{t("forFace")}</h4>
							<p>{t("forFaceDesk")}</p>
						</div>
					</div>
					<div className="machinery__body--block--item3">
						<Image src={end2Img} alt="square" />
						<div>
							<h4 className="machinery__body--subtitle">
								{t("forParaOrbital")}
							</h4>
							<p>{t("forParaOrbitalDesk")}</p>
						</div>
					</div>
					<div className="machinery__body--block--item3">
						<Image src={end3Img} alt="square" />
						<div>
							<h4 className="machinery__body--subtitle">{t("forBody")}</h4>
							<p>{t("forBodyDesk")}</p>
						</div>
					</div>
					<div className="machinery__body--block--item3">
						<Image src={end4Img} alt="square" />
						<div>
							<h4 className="machinery__body--subtitle">
								{t("forDelicateZones")}
							</h4>
							<p>{t("forDelicateZonesDesk")}</p>
						</div>
					</div>
				</div>
				<div className="machinery__body--listscover">
					<h3 className="machinery__body--title">{t("mainAdvantages")}</h3>
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p>{t("RegulatedDepth")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("SoftandCorrectEnter")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("TechnologyOfReverseControle")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("ImpedanceControlTechnology")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("RealTimeReverseConnection")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("HighPower")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("UniqueCombination")}</p>
						</li>
						<li className="machinery__body--list_text">
							<p>{t("FullyIntellectual")}</p>
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
				<h3 className="machinery__body--title">{t("mainAdvantages")}</h3>
				<div className="machinery__body--listscover">
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							{t("FractionalSkin")}
						</li>
						<li className="machinery__body--list_text">
							{t("RemovingOverUsages")}
						</li>
						<li className="machinery__body--list_text">
							{t("DecreasementOfRubs")}
						</li>
						<li className="machinery__body--list_text">
							{t("DecreaseOfMorches")}
						</li>
						<li className="machinery__body--list_text">
							{t("IncreaseOfElasticity")}
						</li>
						<li className="machinery__body--list_text">
							{t("AcneHealingandPostAcne")}
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
