import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import blog2Img from "@/shared/assets/img/blog/blog2.png"
import blogImg from "@/shared/assets/img/blog/blog.png"

export const MessageComponent = () => {
	const { t } = useTranslation()
	return (
		<div className="message">
			<div className="message__img">
				<Image src={blogImg} alt="blog" />
			</div>
			<div className="message__body">
				<h2 className="message__body--title">{t("howMassageWorks")}</h2>
				<p className="message__body--data">{t("25March")}</p>
				<h3 className="message__body--subtitle">{t("effectiveAndAppeal")}</h3>
				<p className="message__body--text">{t("thoseWhoOnce")}</p>
				<Image src={blog2Img} alt="blog" />
				<p className="message__body--text">{t("forAntistressEffect")}</p>
				<h3 className="message__body--subtitle">{t("proAdvice")}</h3>
				<p className="message__body--text">{t("ifTalk")}</p>
			</div>
		</div>
	)
}
