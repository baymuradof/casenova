import React from "react"
import { useTranslation } from "react-i18next"

export const GalleryHero = () => {
	const { t } = useTranslation()
	return (
		<div className="gallery">
			<div className="container">
				<div className="gallery__body">
					<h2 className="gallery__body--title">{t("gallery")}</h2>
					<p className="gallery__body--text">{t("professionalDoctors")}</p>
					<div className="gallery__body--block">
						{/* <!-- content injects here --> */}
					</div>
					<button id="see-more" className="gallery__body--button">
						{t("seeMore")}
					</button>
				</div>
			</div>
		</div>
	)
}
