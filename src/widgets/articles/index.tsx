import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import leftImg from "@/shared/assets/img/left.png"
import rightImg from "@/shared/assets/img/right.png"

export const Articles = () => {
	const { t } = useTranslation()
	return (
		<div className="article">
			<div className="article__container">
				<div className="article__inner">
					<div className="article__box--head">
						<h3>{t("notJustWords")}</h3>
						<p>{t("whyHappy")}</p>
						<div className="article__box--head--btns">
							<button className="prev-btn">
								<Image src={leftImg} alt="left" />
							</button>
							<button className="next-btn">
								<Image src={rightImg} alt="right" />
							</button>
						</div>
					</div>
					<div className="swiper" id="articles-swiper">
						<div className="swiper-wrapper"></div>
					</div>
				</div>
			</div>
		</div>
	)
}
