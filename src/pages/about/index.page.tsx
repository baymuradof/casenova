import { AboutUs } from "@/widgets/about-us/index.page"
import { Doctors } from "@/widgets/doctors "
import { Footer } from "@/widgets/footer"
import { Header } from "@/widgets/header"
import { ModalComponent } from "@/widgets/modal"
import { Questions } from "@/widgets/questions"
import { Values } from "@/widgets/values/values.page"

const AboutPage = () => {
	return (
		<>
			<ModalComponent />
			<div className="site-container">
				<div className="services-wrap">
					<Header />
					<AboutUs />
				</div>
				<Values />
				<Doctors />
				<div className="ellipse_wrapper">
					<Questions />
					<Footer />
				</div>
			</div>
		</>
	)
}

export default AboutPage
