import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import manipula1Img from "@/shared/assets/img/equipment/manipula1.png"
import manipula2Img from "@/shared/assets/img/equipment/manipula2.png"
import manipula3Img from "@/shared/assets/img/equipment/manipula3.png"
import equipment from "@/shared/assets/img/equipment/square.png"
import dermotologyImg from "@/shared/assets/img/services/dermotology.png"

export const AlmaEqComponent = () => {
	const { t } = useTranslation()
	return (
		<div className="machinery alma-q">
			<div className="machinery__middle_body">
				<h3 className="machinery__body--title">
					{t("youngerAndRemovePigmentation")}
				</h3>
				<p className="machinery__body--text">{t("weRegularlyInvite")}</p>
				<h3 className="machinery__body--title">{t("keyDifference")}</h3>
				<div className="machinery__body--block">
					<div className="machinery__body--block--item">
						<Image src={equipment} alt="square" />
						<p>{t("oneOfTheMostEffective")}</p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={equipment} alt="square" />
						{/* <img src="img/equipment/square.png" alt="square"/> */}
						<p>{t("photoAcusticCase")}</p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={equipment} alt="square" />
						<p>{t("4VariantsOfLength")}</p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={equipment} alt="square" />
						{/* <img src="img/equipment/square.png" alt="square"/> */}
						<p>{t("highPower")}</p>
					</div>
				</div>
				<h3 className="machinery__body--title">{t("lookOnWork")}</h3>
				<div className="machinery__body--video">
					{/* <Image src="img/services/4.png" alt="square" /> */}
					{/* <img src="img/services/4.png" alt="videoImg"/>  */}
					<iframe
						width="100%"
						height="100%"
						className="iframe"
						src="https://www.youtube.com/embed/rvNWJBUD-V4?si=NBK4UK3JuFHQNJuh"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<h3 className="machinery__body--title">{t("singleDoubleImpulse")}</h3>
				<p className="machinery__body--text">{t("ultraSmallNano")}</p>
				<div className="machinery__body--box">
					<Image src={dermotologyImg} alt="square" />
					<div className="machinery__body--box--desc">
						<p>{t("beforeCure")}</p>
						<p>{t("afterCure")}</p>
					</div>
				</div>
				<h3 className="machinery__body--title">
					{t("whatManipulationsInWork")}
				</h3>
				<div className="manipula_box">
					<div className="machinery__body--manipula">
						<Image src={manipula1Img} alt="square" />
						{/* <img src="img/equipment/manipula1.png" alt="manipula"/> */}
						<div className="machinery__body--manipula--desc">
							<h4>{t("manipula25")}</h4>
							<p>{t("manipulCanChangeSpots")}</p>
						</div>
					</div>
					<div className="machinery__body--manipula">
						<Image src={manipula2Img} alt="manipula" />
						<div className="machinery__body--manipula--desc">
							<h4>{t("manipula90")}</h4>
							<p>{t("manipulaWithLongImpulse")}</p>
						</div>
					</div>
					<div className="machinery__body--manipula">
						{/* <img src="img/equipment/manipula3.png" alt="manipula"> */}
						<Image src={manipula3Img} alt="manipula" />
						<div className="machinery__body--manipula--desc">
							<h4>{t("manipula60")}</h4>
							<p>{t("spectrumY")}</p>
						</div>
					</div>
				</div>
				<h3 className="machinery__body--title">{t("whatProblemsSolved")}</h3>
				<h4 className="machinery__body--subtitle">
					{t("removalPigmentation")}
				</h4>
				<p className="machinery__body--text">{t("canWorkWithHard")}</p>
				<h4 className="machinery__body--subtitle">{t("youngerSkin")}</h4>
				<p className="machinery__body--text">{t("inNewDevice")} </p>
				<h4 className="machinery__body--subtitle">{t("removeVessels")}</h4>
				<p className="machinery__body--text">{t("longImpulseLaser")}</p>
			</div>
		</div>
	)
}
