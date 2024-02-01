import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import equipment1Img from "@/shared/assets/img/equipment/1.png"
import equipment2Img from "@/shared/assets/img/equipment/2.png"
import equipment3Img from "@/shared/assets/img/equipment/3.png"
import descImg from "@/shared/assets/img/equipment/desc-img.png"
import nextImg from "@/shared/assets/img/equipment/next.png"

export const Equipments = () => {
	const { t } = useTranslation()
	return (
		<div className="equipment">
			<div className="container equipment__container">
				<div className="equipment__card">
					{/* <!--   card      --> */}
					<div className="equipment__card-item card_item1">
						{/* <!--   title card   --> */}
						<div className="equipment__card-item-info">
							<h3 className="equipment__card-item-info-title">
								{t("idealEquipment")}
							</h3>
							<p className="equipment__card-item-info-subtitle">
								{t("fastAndSafe")}
							</p>
						</div>
						<div className="equipment__card-item-box left border-radius-bottom-right">
							<Image src={equipment1Img} alt="equipment" />
							<div className="equipment__card-item-box-info left-info">
								<h4 className="equipment__card-item-box-info-title">
									Alma Lasers
								</h4>
								<p className="equipment__card-item-box-info-subtitle">
									Pixel CO <sup>2</sup>
								</p>
							</div>
						</div>
					</div>
					{/* <!--   card      --> */}
					<div className="equipment__card-item card_item2">
						<div className="equipment__card-item-box center border-radius-top-left">
							<Image src={equipment2Img} alt="equipment" />
							<div className="equipment__card-item-box-info center-info">
								<h4 className="equipment__card-item-box-info-title">
									Alma Lasers
								</h4>
								<p className="equipment__card-item-box-info-subtitle">Alma-Q</p>
							</div>
						</div>
					</div>
					{/* <!--   card      --> */}
					<div className="equipment__card-item card_item3">
						<div className="equipment__card-item-box right">
							<Image src={equipment3Img} alt="equipment" />
							<div className="equipment__card-item-box-info right-info">
								<h4 className="equipment__card-item-box-info-title">
									Alma Lasers
								</h4>
								<p className="equipment__card-item-box-info-subtitle">
									Soprano <br /> Titanium
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="equipment__desc">
					<h2 className="equipment__desc--title">
						Case Nova. <br />
						<span>{t("recoverYoung")}</span>
					</h2>
					<p className="equipment__desc--text">{t("caseNovaBuiltIn2016")}</p>
					<div className="equipment__desc--img">
						<Image src={descImg} alt="desc-img" />
					</div>
					<a href="about" className="equipment__desc--button">
						<p>{t("moreAboutUs")}</p>
						<Image src={nextImg} alt="next" />
					</a>
				</div>
			</div>
		</div>
	)
}
