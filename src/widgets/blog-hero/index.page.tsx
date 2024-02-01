import React from "react"
import { useTranslation } from "react-i18next"

export const BlogHero = () => {
	const { t } = useTranslation()

	return (
		<div className="blog">
			<div className="container">
				<div className="blog__body">
					<h2 className="blog__body--title">{t("blog")}</h2>
					<p className="blog__body--text">{t("professionalDoctors")}</p>
					<div className="blog__body--block"></div>
					<button id="see-more" className="blog__body--button">
						{t("seeMore")}
					</button>
				</div>
			</div>
		</div>
	)
}
