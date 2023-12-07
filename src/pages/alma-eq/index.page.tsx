import Image from "next/image"
import React from "react"

import manipula1Img from "@/shared/assets/img/equipment/manipula1.png"
import manipula2Img from "@/shared/assets/img/equipment/manipula2.png"
import manipula3Img from "@/shared/assets/img/equipment/manipula3.png"
import equipment from "@/shared/assets/img/equipment/square.png"
import dermotologyImg from "@/shared/assets/img/services/dermotology.png"

const AlmaEqPage = () => {
	return (
		<div className="machinery alma-q">
			<div className="machinery__middle_body">
				<h3
					className="machinery__body--title"
					data-i18n="youngerAndRemovePigmentation"
				></h3>
				<p className="machinery__body--text" data-i18n="weRegularlyInvite"></p>
				<h3 className="machinery__body--title" data-i18n="keyDifference"></h3>
				<div className="machinery__body--block">
					<div className="machinery__body--block--item">
						<Image src={equipment} alt="square" />
						<p data-i18n="oneOfTheMostEffective"></p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={equipment} alt="square" />
						{/* <img src="img/equipment/square.png" alt="square"/> */}
						<p data-i18n="photoAcusticCase"></p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={equipment} alt="square" />
						<p data-i18n="4VariantsOfLength"></p>
					</div>
					<div className="machinery__body--block--item">
						<Image src={equipment} alt="square" />
						{/* <img src="img/equipment/square.png" alt="square"/> */}
						<p data-i18n="highPower"></p>
					</div>
				</div>
				<h3 className="machinery__body--title" data-i18n="lookOnWork"></h3>
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
				<h3
					className="machinery__body--title"
					data-i18n="singleDoubleImpulse"
				></h3>
				<p className="machinery__body--text" data-i18n="ultraSmallNano"></p>
				<div className="machinery__body--box">
					<Image src={dermotologyImg} alt="square" />
					<div className="machinery__body--box--desc">
						<p data-i18n="beforeCure"></p>
						<p data-i18n="afterCure"></p>
					</div>
				</div>
				<h3
					className="machinery__body--title"
					data-i18n="whatManipulationsInWork"
				></h3>
				<div className="manipula_box">
					<div className="machinery__body--manipula">
						<Image src={manipula1Img} alt="square" />
						{/* <img src="img/equipment/manipula1.png" alt="manipula"/> */}
						<div className="machinery__body--manipula--desc">
							<h4 data-i18n="manipula25"></h4>
							<p data-i18n="manipulCanChangeSpots"></p>
						</div>
					</div>
					<div className="machinery__body--manipula">
						<Image src={manipula2Img} alt="manipula" />
						<div className="machinery__body--manipula--desc">
							<h4 data-i18n="manipula90"></h4>
							<p data-i18n="manipulaWithLongImpulse"></p>
						</div>
					</div>
					<div className="machinery__body--manipula">
						{/* <img src="img/equipment/manipula3.png" alt="manipula"> */}
						<Image src={manipula3Img} alt="manipula" />
						<div className="machinery__body--manipula--desc">
							<h4 data-i18n="manipula60"></h4>
							<p data-i18n="spectrumY"></p>
						</div>
					</div>
				</div>
				<h3
					className="machinery__body--title"
					data-i18n="whatProblemsSolved"
				></h3>
				<h4
					className="machinery__body--subtitle"
					data-i18n="removalPigmentation"
				></h4>
				<p className="machinery__body--text" data-i18n="canWorkWithHard"></p>
				<h4 className="machinery__body--subtitle" data-i18n="youngerSkin"></h4>
				<p className="machinery__body--text" data-i18n="inNewDevice">
					{" "}
				</p>
				<h4
					className="machinery__body--subtitle"
					data-i18n="removeVessels"
				></h4>
				<p className="machinery__body--text" data-i18n="longImpulseLaser"></p>
			</div>
		</div>
	)
}

export default AlmaEqPage
