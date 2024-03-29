import { Footer } from "@/widgets/footer"
import { GalleryHero } from "@/widgets/gallery-hero/index.page"
import { Header } from "@/widgets/header"

const GalleryPage = () => {
	return (
		<div className="page__body">
			<div className="site-container">
				<div className="gallery-wrap">
					<div className="services-wrap">
						<Header />
						<GalleryHero />
					</div>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default GalleryPage
