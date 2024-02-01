import React from "react"
import { useTranslation } from "react-i18next"

export const EquipmentTypes = () => {
	const { t } = useTranslation()
	return (
		<div className="equipments">
			<div className="container">
				<h2 className="equipments__title">{t("equipment")}</h2>
				<p className="equipments__text">{t("ourDoctorsProfessionalizm")}</p>
				<div className="equipments__block">
					<div className="equipments__block__row">
						{/* <!-- content injects here --> */}
					</div>
				</div>
			</div>
		</div>
	)
}
