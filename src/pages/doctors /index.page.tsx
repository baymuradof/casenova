import Image from "next/image"
import React from "react"

import s1Img from "@/shared/assets/img/about/s-1.png"
import s2Img from "@/shared/assets/img/about/s-2.png"
import s3Img from "@/shared/assets/img/about/s-3.png"
import leftpng from "@/shared/assets/img/left.png"
import rightpng from "@/shared/assets/img/right.png"

const DoctorsPage = () => {
	return (
		<div className="doctors">
			<div className="container">
				<div className="doctors__box">
					<div className="doctors__box--head">
						<h3 data-i18n="ourDoctors"></h3>
						<p data-i18n="profesionals"></p>
						<div className="doctors__box--head--btns">
							<button className="prev-btn">
								<Image src={leftpng} alt="left" />
							</button>
							<button className="next-btn">
								<Image src={rightpng} alt="left" />
							</button>
						</div>
					</div>
					<div className="swiper" id="doctors-swiper">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="doctors__box--desc">
									<Image src={s1Img} alt="about" />
									<h3>Виктория Новостройкина</h3>
									<p data-i18n="dermDoctor"></p>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="doctors__box--desc">
									<Image src={s2Img} alt="about" />
									<h3>Маргарита Трихополова</h3>
									<p data-i18n="dermDoctor"></p>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="doctors__box--desc">
									<Image src={s3Img} alt="about" />
									<h3>Екатерина Невашенко</h3>
									<p data-i18n="dermDoctor"></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default DoctorsPage
