import Image from "next/image"
import React from "react"

import modalImg2 from "@/shared/assets/img/equipment/modal-img-OLAT.png"
import modalImg from "@/shared/assets/img/equipment/modal-img.png"
import squareImg from "@/shared/assets/img/equipment/square.png"
import dermotologyImg from "@/shared/assets/img/services/dermotology.png"

const HealitePage = () => {
	return (
		<div className="machinery healite-2">
			<div className="machinery__middle_body">
				<h3
					className="machinery__body--title"
					data-i18n="LEDSystemForLowIntensity"
				></h3>
				<p
					className="machinery__body--text"
					data-i18n="HEALITELowIntensity"
				></p>
				<h3
					className="machinery__body--title"
					data-i18n="ThreeWavelengths"
				></h3>
				<div className="machinery__body--block">
					<div className="machinery__body--block--item">
						<Image src={squareImg} alt="square" />
						<p data-i18n="830(+590)нм"></p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={squareImg} alt="square" />
						<p data-i18n="633нм"></p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={squareImg} alt="square" />
						<p data-i18n="415нм"></p>
					</div>
				</div>
				<div className="machinery__body--listscover">
					<h4
						className="machinery__body--subtitle"
						data-i18n="830(+590)нм"
					></h4>
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p data-i18n="woundHealing"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="painRelief"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="painInMuscules"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="artritis"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="musculeSpasm"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="bloodCirculation"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="hairLoss"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="acne"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="scinRejuvenation"></p>
						</li>
					</ul>
					<h4 className="machinery__body--subtitle" data-i18n="633нм"></h4>
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p data-i18n="scinRejuvenation"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="hairLoss"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="scinRejuvenation2"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="acneHealing"></p>
						</li>
					</ul>

					<h4 className="machinery__body--subtitle" data-i18n="415нм"></h4>
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p data-i18n="activeAcne"></p>
						</li>
					</ul>
				</div>

				<h3
					className="machinery__body--title"
					data-i18n="LookOnWorkHealite"
				></h3>
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
				<h3 className="machinery__body--title" data-i18n="mainAdvantages"></h3>
				<div className="machinery__body--listscover">
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p data-i18n="technologyOfConcentrated"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="technologyOfPhoto"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="comfortableScreen"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="fullControl"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="accessToUseLampBlock"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="deepInfluence"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="subcellularLevel"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="easyToUseWithOther"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="painless"></p>
						</li>
					</ul>
				</div>
				<div className="machinery__body--box">
					<Image src={dermotologyImg} alt="dermotology" />
					<div className="machinery__body--box--desc">
						<p data-i18n="beforeCure"></p>
						<p data-i18n="afterCure"></p>
					</div>
				</div>
				<h4
					className="machinery__body--subtitle"
					data-i18n="MatrixTechnology"
				></h4>
				<div>
					<p
						className="machinery__body--text"
						data-i18n="MatrixTechnologyDesc"
					></p>
					<div className="machinery__body--image">
						<Image src={modalImg} alt="OLAT image" />
					</div>
				</div>
				<h4
					className="machinery__body--subtitle"
					data-i18n="fullyRegulated"
				></h4>
				<p className="machinery__body--text" data-i18n="fullyRegulatedDesk"></p>
				<h4
					className="machinery__body--subtitle"
					data-i18n="fullyRefulatedWithFocus"
				></h4>
				<div>
					<Image src={modalImg2} alt="OLAT image" />
				</div>
				<h3
					className="machinery__body--title"
					data-i18n="overallInfoForUsability"
				></h3>
				<div className="machinery__body--listscover">
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p data-i18n="acelerationOfWound"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="lessPain"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="ProfilacticsOfForming"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="LessHyperpigmentation"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="BetterOverAllStats"></p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default HealitePage
