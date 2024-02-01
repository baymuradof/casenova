import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import downloadImg from "@/shared/assets/img/download.png"
import services1png from "@/shared/assets/img/services/1.png"
import services5png from "@/shared/assets/img/services/5.png"
import dermotolyImg from "@/shared/assets/img/services/dermotology.png"

export const CosmetologyComponent = () => {
	const { t } = useTranslation()
	return (
		<div className="dermotology cosmetology">
			<div className="dermotology__img">
				<Image src={services1png} alt="dermotology" />
			</div>
			<div className="dermotology__body">
				<h2 className="dermotology__body--title">{t("cosmetology")}</h2>
				<p className="dermotology__body--text">{t("dermotologyIsDelicate")}</p>
				<h3 className="dermotology__body--subtitle">{t("cureAcne")}</h3>
				<p className="dermotology__body--parag">{t("problemsWithSkin")}</p>
				<div className="dermotology__body--block">
					<Image src={dermotolyImg} alt="dermotology" />
					<div className="dermotology__body--block--desc">
						<p>{t("beforeCure")}</p>
						<p>{t("afterCure")}</p>
					</div>
				</div>
				<h3 className="dermotology__body--subtitle">{t("curePigmentation")}</h3>
				<p className="dermotology__body--parag">{t("weRegularly")}</p>
				<h4>{t("howProcedureGoes")}</h4>
				<div className="dermotology__body--video">
					<Image src={services5png} alt="dermotology" />
				</div>
				<h4>{t("cureGiperGidration")}</h4>
				<p className="dermotology__body--parag">{t("localInfer")}</p>
				<h4>{t("cureOsmidros")}</h4>
				<p className="dermotology__body--parag">{t("needHygen")}</p>
				<div className="dermotology__body--prices">
					<div className="dermotology__body--prices--header">
						<h3 className="dermotology__body--subtitle">{t("servicePrice")}</h3>
						<button>
							<Image src={downloadImg} alt="download" />
							<span>{t("downloadPriceList")}</span>
						</button>
					</div>
					<div className="dermotology__body--prices--body">
						<div className="dermotology__body--prices--body--head">
							<h5 className="dermotology__body--prices--body--desc--title">
								{t("service")}
							</h5>
							<h5 className="dermotology__body--prices--body--desc--cost">
								{t("price")}
							</h5>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p className="dermotology__body--prices--body--desc--par">
								{t("clearLift1sm")}
							</p>
							<p className="dermotology__body--prices--body--desc--cost">
								{t("from85k")}
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p className="dermotology__body--prices--body--desc--par">
								{t("clearLiftOrbital")}
							</p>
							<p
								className="dermotology__body--prices--body--desc--cost"
								data-i18n=""
							>
								300 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p className="dermotology__body--prices--body--desc--par">
								{t("clearLiftLips")}
							</p>
							<p className="dermotology__body--prices--body--desc--cost">
								{" "}
								500 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc  with-bg">
							<p className="dermotology__body--prices--body--desc--par">
								{t("carbonPealing")}
							</p>
							<p className="dermotology__body--prices--body--desc--cost">
								520 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p className="dermotology__body--prices--body--desc--par">
								{t("combineDYE")}
							</p>
							<p
								className="dermotology__body--prices--body--desc--cost"
								data-i18n=""
							>
								2 450 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p className="dermotology__body--prices--body--desc--par">
								{t("removePigmentation")}
							</p>
							<p className="dermotology__body--prices--body--desc--cost">
								{" "}
								120 000
							</p>
						</div>
						<div className="dermotology__body--prices--body--desc">
							<p className="dermotology__body--prices--body--desc--par">
								{t("fractionCO2")}
							</p>
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
