import { getReviewsList } from "@/entitis/blog-api"
import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import useSWR from "swr"

import leftImg from "@/shared/assets/img/left.png"
import rightImg from "@/shared/assets/img/right.png"

interface Review {
	feedback: string
	fullname: string
}

const ArticlesComponent = () => {
	const { t } = useTranslation()

	const { data: reviewsData, error } = useSWR<Review[]>(
		"apiKeys.review",
		getReviewsList,
	)

	if (error) return <div>Error fetching data</div>
	if (!reviewsData) return <div>Loading...</div>

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
						<div className="swiper-wrapper">
							{reviewsData.map((review, index) => (
								<div key={index} className="swiper-slide">
									<div className="article__box--desc">
										<div className="articleDesc">
											<p className="articleDesc">{review.feedback}</p>
											<h3 className="articleAuthor">{review.fullname}</h3>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArticlesComponent
