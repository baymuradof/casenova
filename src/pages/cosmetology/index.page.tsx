import Image from "next/image"
import React from "react"

import downloadImg from "@/shared/assets/img/download.png"
import services1png from "@/shared/assets/img/services/1.png"
import services5png from "@/shared/assets/img/services/5.png"
import dermotolyImg from "@/shared/assets/img/services/dermotology.png"

const CosmetologyPage = () => {
	return (
		<div className="dermotology cosmetology">
			<div className="dermotology__img">
				<Image src={services1png} alt="dermotology" />
			</div>
			<div className="dermotology__body">
				<h2 className="dermotology__body--title" data-i18n="cosmetology"></h2>
				<p
					className="dermotology__body--text"
					data-i18n="dermotologyIsDelicate"
				></p>
				<h3 className="dermotology__body--subtitle" data-i18n="cureAcne"></h3>
				<p
					className="dermotology__body--parag"
					data-i18n="problemsWithSkin"
				></p>
				<div className="dermotology__body--block">
					<Image src={dermotolyImg} alt="dermotology" />
					<div className="dermotology__body--block--desc">
						<p data-i18n="beforeCure"></p>
						<p data-i18n="afterCure"></p>
					</div>
				</div>
				<h3
					className="dermotology__body--subtitle"
					data-i18n="curePigmentation"
				></h3>
				<p className="dermotology__body--parag" data-i18n="weRegularly"></p>
				<h4 data-i18n="howProcedureGoes"></h4>
				<div className="dermotology__body--video">
					<Image src={services5png} alt="dermotology" />
				</div>
				<h4 data-i18n="cureGiperGidration"></h4>
				<p className="dermotology__body--parag" data-i18n="localInfer"></p>
				<h4 data-i18n="cureOsmidros"></h4>
				<p className="dermotology__body--parag" data-i18n="needHygen"></p>
				<div className="dermotology__body--prices">
					<div className="dermotology__body--prices--header">
						<h3
							className="dermotology__body--subtitle"
							data-i18n="servicePrice"
						></h3>
						<button>
							<Image src={downloadImg} alt="download" />
							<span data-i18n="downloadPriceList"></span>
						</button>
					</div>
					<div className="dermotology__body--prices--body">
						<div className="dermotology__body--prices--body--head">
							<h5
								className="dermotology__body--prices--body--desc--title"
								data-i18n="service"
							></h5>
							<h5
								className="dermotology__body--prices--body--desc--cost"
								data-i18n="price"
							></h5>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p
								className="dermotology__body--prices--body--desc--par"
								data-i18n="clearLift1sm"
							></p>
							<p
								className="dermotology__body--prices--body--desc--cost"
								data-i18n="from85k"
							></p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p
								className="dermotology__body--prices--body--desc--par"
								data-i18n="clearLiftOrbital"
							></p>
							<p
								className="dermotology__body--prices--body--desc--cost"
								data-i18n=""
							>
								300 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p
								className="dermotology__body--prices--body--desc--par"
								data-i18n="clearLiftLips"
							></p>
							<p className="dermotology__body--prices--body--desc--cost">
								{" "}
								500 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc  with-bg">
							<p
								className="dermotology__body--prices--body--desc--par"
								data-i18n="carbonPealing"
							></p>
							<p className="dermotology__body--prices--body--desc--cost">
								520 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p
								className="dermotology__body--prices--body--desc--par"
								data-i18n="combineDYE"
							></p>
							<p
								className="dermotology__body--prices--body--desc--cost"
								data-i18n=""
							>
								2 450 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p
								className="dermotology__body--prices--body--desc--par"
								data-i18n="removePigmentation"
							></p>
							<p className="dermotology__body--prices--body--desc--cost">
								{" "}
								120 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p
								className="dermotology__body--prices--body--desc--par"
								data-i18n="fractionCO2"
							></p>
							<p className="dermotology__body--prices--body--desc--cost">
								{" "}
								3 400 000
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CosmetologyPage
