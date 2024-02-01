import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import contactsDoneImg from "@/shared/assets/img/contacts_done.svg"

export const ContactFormDone = () => {
	const { t } = useTranslation()
	return (
		<div id="none" className="content">
			<Image src={contactsDoneImg} alt="done" />
			<h2>{t("thanksForComment")}</h2>
			<p>{t("weLeanrYourResume")}</p>
		</div>
	)
}
