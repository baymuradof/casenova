import Image from "next/image"
import React from "react"

import contactsDoneImg from "@/shared/assets/img/contacts_done.svg"

const ContactFormDone = () => {
	return (
		<div id="none" className="content">
			<Image src={contactsDoneImg} alt="done" />
			<h2 data-i18n="thanksForComment"></h2>
			<p data-i18n="weLeanrYourResume"></p>
		</div>
	)
}
export default ContactFormDone
