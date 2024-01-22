import Image from "next/image"
import React from "react"

import arrowDownImg from "@/shared/assets/img/arrow-down.svg"
import heroCircleImg from "@/shared/assets/img/hero-circle-img.png"
import heroImg from "@/shared/assets/img/new-hero-img.svg"

export const Hero = () => {
	return (
		<div className="hero">
			<div className="container-lg hero__container">
				<div className="hero__content">
					<div className="hero__content-info">
						<div className="hero__content-info-img">
							<Image src={heroImg} alt="heroimg" />
						</div>
						<a href="#services" className="hero__content-info-text">
							<p
								className="hero__content-info-text-title"
								data-i18n="openWorld"
							></p>
							<Image src={arrowDownImg} alt="arrowdown" />
						</a>
					</div>
				</div>
			</div>
			<div className="hero__circle">
				<div className="hero__circle-img">
					<Image src={heroCircleImg} alt="herocircle" />
				</div>
			</div>
		</div>
	)
}
