import React from "react"

const BlogHero = () => {
	return (
		<div className="blog">
			<div className="container">
				<div className="blog__body">
					<h2 className="blog__body--title" data-i18n="blog"></h2>
					<p className="blog__body--text" data-i18n="professionalDoctors"></p>
					<div className="blog__body--block"></div>
					<button
						id="see-more"
						className="blog__body--button"
						data-i18n="seeMore"
					></button>
				</div>
			</div>
		</div>
	)
}
export default BlogHero
