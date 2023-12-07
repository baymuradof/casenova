import Image from "next/image"
import React from "react"

import end1Img from "@/shared/assets/img/equipment/end1.png"
import end2Img from "@/shared/assets/img/equipment/end2.png"
import end3Img from "@/shared/assets/img/equipment/end3.png"
import end4Img from "@/shared/assets/img/equipment/end4.png"
import dermotologyImg from "@/shared/assets/img/services/dermotology.png"

const LutronicGeniusPage = () => {
	return (
		<div className="machinery healite-2">
			<div className="machinery__middle_body">
				<h3 className="machinery__body--title" data-i18n="newestBiPolar"></h3>
				<p className="machinery__body--text" data-i18n="LutronicGeniusIs"></p>
				<h3
					className="machinery__body--title"
					data-i18n="FourTypesOfNeedles"
				></h3>
				<div className="machinery__body--block">
					<div className="machinery__body--block--item3">
						<Image src={end1Img} alt="square" />
						<div>
							<h4
								className="machinery__body--subtitle"
								data-i18n="forFace"
							></h4>
							<p data-i18n="forFaceDesk"></p>
						</div>
					</div>
					<div className="machinery__body--block--item3">
						<Image src={end2Img} alt="square" />
						<div>
							<h4
								className="machinery__body--subtitle"
								data-i18n="forParaOrbital"
							></h4>
							<p data-i18n="forParaOrbitalDesk"></p>
						</div>
					</div>
					<div className="machinery__body--block--item3">
						<Image src={end3Img} alt="square" />
						<div>
							<h4
								className="machinery__body--subtitle"
								data-i18n="forBody"
							></h4>
							<p data-i18n="forBodyDesk"></p>
						</div>
					</div>
					<div className="machinery__body--block--item3">
						<Image src={end4Img} alt="square" />
						<div>
							<h4
								className="machinery__body--subtitle"
								data-i18n="forDelicateZones"
							></h4>
							<p data-i18n="forDelicateZonesDesk"></p>
						</div>
					</div>
				</div>
				<div className="machinery__body--listscover">
					<h3
						className="machinery__body--title"
						data-i18n="mainAdvantages"
					></h3>
					<ul className="machinery__body--list">
						<li className="machinery__body--list_text">
							<p data-i18n="RegulatedDepth"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="SoftandCorrectEnter"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="TechnologyOfReverseControle"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="ImpedanceControlTechnology"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="RealTimeReverseConnection"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="HighPower"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="UniqueCombination"></p>
						</li>
						<li className="machinery__body--list_text">
							<p data-i18n="FullyIntellectual"></p>
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
				<h3 className="machinery__body--title" data-i18n="mainAdvantages"></h3>
				<div className="machinery__body--listscover">
					<ul className="machinery__body--list">
						<li
							className="machinery__body--list_text"
							data-i18n="FractionalSkin"
						></li>
						<li
							className="machinery__body--list_text"
							data-i18n="RemovingOverUsages"
						></li>
						<li
							className="machinery__body--list_text"
							data-i18n="DecreasementOfRubs"
						></li>
						<li
							className="machinery__body--list_text"
							data-i18n="DecreaseOfMorches"
						></li>
						<li
							className="machinery__body--list_text"
							data-i18n="IncreaseOfElasticity"
						></li>
						<li
							className="machinery__body--list_text"
							data-i18n="AcneHealingandPostAcne"
						></li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default LutronicGeniusPage
