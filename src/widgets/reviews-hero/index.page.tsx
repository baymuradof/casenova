import React from "react"
import { useTranslation } from "react-i18next"

export const ReviewsHeroComponent = () => {
	const { t } = useTranslation()
	return (
		<div className="reviews">
			<div className="container">
				<div className="reviews__block">
					<h2 className="reviews__block--title">{t("reviews")}</h2>
					<p className="reviews__block--text">{t("professionalDoctors")}</p>
					<div className="reviews__block--box">
						<div className="reviews__block--box--column">
							<div className="reviews__block--box--column--article">
								<p>{t("thisIsSuperCentre")}</p>
								<h3>Марина</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p>{t("goToThisSalon")}</p>
								<h3>Александра</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p>{t("saySatisfied")}</p>
								<h3>Марина</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p>{t("comfortAtmosphere")}</p>
								<h3>Александра</h3>
							</div>
						</div>
						<div className="reviews__block--box--column">
							<div className="reviews__block--box--column--article">
								<p>{t("accidentOpenWeb")}</p>
								<h3>Виктория</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p>{t("inHalfHour")}</p>
								<h3>Евгения</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p>{t("soulWarnPerson")}</p>
								<h3>Виктория</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
