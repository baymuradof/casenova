import { DermotologyComponent } from "@/widgets/dermotology/index.page"
import { Footer } from "@/widgets/footer"
import { Header } from "@/widgets/header"
import { ModalComponent } from "@/widgets/modal"
import { Questions } from "@/widgets/questions"
import { ServiceTypesComponent } from "@/widgets/service-types/index.page"

const servicesPage = () => {
	return (
		<body className="page__body">
			<ModalComponent />
			<div className="site-container">
				<div className="services-wrap">
					<Header />
					<ServiceTypesComponent />
				</div>
				<DermotologyComponent />
				<div className="ellipse_wrapper">
					<Questions />
					<Footer />
				</div>
			</div>
		</body>
	)
}
export default servicesPage
