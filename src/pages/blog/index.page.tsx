import { BlogHero } from "@/widgets/blog-hero/index.page"
import { Footer } from "@/widgets/footer"
import { Header } from "@/widgets/header"
import { MessageComponent } from "@/widgets/message/index.page"
import { ModalComponent } from "@/widgets/modal"

const blogPage = () => {
	return (
		<body className="page__body">
			<ModalComponent />
			<div className="site-container">
				<div className="gallery-wrap">
					<div className="services-wrap">
						<Header />
						<BlogHero />
					</div>
					<MessageComponent />
					<Footer />
				</div>
			</div>
		</body>
	)
}
export default blogPage
