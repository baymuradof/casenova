import React from "react"

export const ReviewsHeroComponent = () => {
	return (
		<div className="reviews">
			<div className="container">
				<div className="reviews__block">
					<h2 className="reviews__block--title" data-i18n="reviews"></h2>
					<p
						className="reviews__block--text"
						data-i18n="professionalDoctors"
					></p>
					<div className="reviews__block--box">
						<div className="reviews__block--box--column">
							<div className="reviews__block--box--column--article">
								<p data-i18n="thisIsSuperCentre"></p>
								<h3>Марина</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p data-i18n="goToThisSalon"></p>
								<h3>Александра</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p data-i18n="saySatisfied"></p>
								<h3>Марина</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p data-i18n="comfortAtmosphere"></p>
								<h3>Александра</h3>
							</div>
						</div>
						<div className="reviews__block--box--column">
							<div className="reviews__block--box--column--article">
								<p data-i18n="accidentOpenWeb"></p>
								<h3>Виктория</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p data-i18n="inHalfHour"></p>
								<h3>Евгения</h3>
							</div>
							<div className="reviews__block--box--column--article">
								<p data-i18n="soulWarnPerson"></p>
								<h3>Виктория</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
