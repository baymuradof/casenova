import { EquipmentTypes } from "@/widgets/equipment-types/index.page"
import { Footer } from "@/widgets/footer"
import { Header } from "@/widgets/header"
import { ModalComponent } from "@/widgets/modal"
import { Questions } from "@/widgets/questions"

const equipmentPage = () => {
	return (
		<body className="page__body">
			<ModalComponent />
			<div className="site-container">
				<div className="services-wrap">
					<Header />
					<EquipmentTypes />
				</div>
				<div className="ellipse_wrapper">
					<Questions />
					<Footer />
				</div>
			</div>

			{/* <!--<script src="./js/components/equipment.js"></script>--> */}
		</body>
	)
}
export default equipmentPage
