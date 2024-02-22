import { AboutUs } from "@/widgets/about-us/index.page"
import { Doctors } from "@/widgets/doctors "
import { Footer } from "@/widgets/footer"
import { Header } from "@/widgets/header"
import { ModalComponent } from "@/widgets/modal"
import { Questions } from "@/widgets/questions"
import { Values } from "@/widgets/values/values.page"

import "@/shared/styles/main.css"
import "@/shared/styles/vendor.css"

interface AboutPageProps {
	someProperty: string
	anotherProperty: number
}

const AboutPage = (data: AboutPageProps) => {
	console.log("bekend data", data)

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
