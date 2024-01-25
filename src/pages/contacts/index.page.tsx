import { ContactFormDone } from "@/widgets/contacs-form-done/index.page"
import { ContactsHero } from "@/widgets/contacts-hero/index.page"
import { Footer } from "@/widgets/footer"
import { Header } from "@/widgets/header"
import { RegistrationForm } from "@/widgets/registration-form/index.page"

const contacsPage = () => {
	return (
		<body className="page__body">
			<div className="site-container">
				<div className="gallery-wrap">
					<div className="services-wrap">
						<Header />
						<ContactsHero />
					</div>
					<RegistrationForm />
					<ContactFormDone />
					<Footer />
				</div>
			</div>
		</body>
	)
}
export default contacsPage
