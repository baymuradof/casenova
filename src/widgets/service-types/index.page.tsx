import React from "react"
import { useTranslation } from "react-i18next"

export const ServiceTypesComponent = () => {
	const { t } = useTranslation()
	return (
		<div className="service">
			<div className="container">
				<h2 className="service__title">{t("services")}</h2>
				<p className="service__text">{t("professionalDoctors")}</p>
				<div className="service__block services__btn">
					{/* <!-- content injects here --> */}
				</div>
			</div>
		</div>
	)
}
