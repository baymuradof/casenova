import Image from "next/image"
import React from "react"

import nextImg from "@/shared/assets/img/equipment/next.png"

export const QuestionsArticle = () => {
	return (
		<div className="questions__article">
			<h2
				className="questions__article--title"
				data-i18n="articlesAboutHealth"
			></h2>
			<div className="articles_block"></div>
			<a href="blog.html" className="questions__article--button more__button">
				<p data-i18n="moreArticles"></p>
				<Image className="next_icon" src={nextImg} alt="next" />
			</a>
		</div>
	)
}
