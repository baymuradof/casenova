import Image from "next/image"
import React from "react"

import blog2Img from "@/shared/assets/img/blog/blog2.png"
import blogImg from "@/shared/assets/img/blog/blog.png"

const MessagePage = () => {
	return (
		<div className="message">
			<div className="message__img">
				<Image src={blogImg} alt="blog" />
			</div>
			<div className="message__body">
				<h2 className="message__body--title" data-i18n="howMassageWorks"></h2>
				<p className="message__body--data" data-i18n="25March"></p>
				<h3
					className="message__body--subtitle"
					data-i18n="effectiveAndAppeal"
				></h3>
				<p className="message__body--text" data-i18n="thoseWhoOnce"></p>
				<Image src={blog2Img} alt="blog" />
				<p className="message__body--text" data-i18n="forAntistressEffect"></p>
				<h3 className="message__body--subtitle" data-i18n="proAdvice"></h3>
				<p className="message__body--text" data-i18n="ifTalk"></p>
			</div>
		</div>
	)
}
export default MessagePage
