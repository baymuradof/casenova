import React from "react"

export const GalleryHero = () => {
	return (
		<div className="gallery">
			<div className="container">
				<div className="gallery__body">
					<h2 className="gallery__body--title" data-i18n="gallery"></h2>
					<p
						className="gallery__body--text"
						data-i18n="professionalDoctors"
					></p>
					<div className="gallery__body--block">
						{/* <!-- content injects here --> */}
					</div>
					<button
						id="see-more"
						className="gallery__body--button"
						data-i18n="seeMore"
					></button>
				</div>
			</div>
		</div>
	)
}
