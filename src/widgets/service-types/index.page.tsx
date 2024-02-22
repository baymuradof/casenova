import { getServicesList } from "@/entitis/blog-api"
import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import useSWR from "swr"

interface Subservice {
	name: string
}

interface ServiceItem {
	id: number
	renderTypeClass: string
	image: string
	name: string
	subservices: Subservice[]
}

export const ServiceTypesComponent = () => {
	const { data: serviceData, error } = useSWR<ServiceItem[]>(
		"apiKeys.services",
		getServicesList,
	)
	const { t } = useTranslation()

	if (error) return <div>Error fetching data</div>
	if (!serviceData) return <div>Loading...</div>

	return (
		<div className="service">
			<div className="container">
				<h2 className="service__title">{t("services")}</h2>
				<p className="service__text">{t("professionalDoctors")}</p>
				<div className="service__block services__btn">
					{serviceData.map((item) => (
						<div
							key={item.id}
							className={`services__row modalBtn ${item.renderTypeClass}`}
							data-id={item.id}
						>
							<div className="service__block--img">
								<Image
									src={item.image}
									alt={item.name}
									width={500}
									height={500}
								/>
							</div>
							<div className="service__block--desc">
								<h3>{item.name}</h3>
								<ul>
									{item.subservices?.map((subservice, index) => (
										<li key={index}>
											<Image
												src="img/services/next.png"
												alt={subservice.name}
												width={500}
												height={500}
											/>
											<p>{subservice.name}</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
