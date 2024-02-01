import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import nextImg from "@/shared/assets/img/equipment/next.png"

export const QuestionsArticle = () => {
	const { t } = useTranslation()
	return (
		<div className="questions__article">
			<h2 className="questions__article--title">{t("articlesAboutHealth")}</h2>
			<div className="articles_block"></div>
			<a href="blog" className="questions__article--button more__button">
				<p>{t("moreArticles")}</p>
				<Image className="next_icon" src={nextImg} alt="next" />
			</a>
		</div>
	)
}
