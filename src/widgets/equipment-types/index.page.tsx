import { getEquipmentList } from "@/entitis/blog-api"
import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import useSWR from "swr"

interface subequipment {
	name: string
}

interface EquipmentItem {
	id: number
	renderTypeClass: string
	image: string
	name: string
	subequipment: subequipment[]
}

export const EquipmentTypes = () => {
	const { t } = useTranslation()

	const { data: equipmentData, error } = useSWR<EquipmentItem[]>(
		"apiKeys.equipment",
		getEquipmentList,
	)

	if (error) return <div>Error fetching data</div>
	if (!equipmentData) return <div>Loading...</div>
	return (
		<div className="equipments">
			<div className="container">
				<h2 className="equipments__title">{t("equipment")}</h2>
				<p className="equipments__text">{t("ourDoctorsProfessionalizm")}</p>
				<div className="equipments__block">
					<div className="equipments__block__row">
						{equipmentData.map((item) => (
							<div
								key={item.id}
								className={`equipments__row modalBtn ${item.renderTypeClass}`}
								data-id={item.id}
							>
								<div className="equipments__block--img">
									<Image
										src={item.image}
										alt={item.name}
										width={500}
										height={500}
									/>
								</div>
								<div className="equipments__block--desc">
									<h3>{item.name}</h3>
									<ul>
										{item.subequipment?.map((subequipment, index) => (
											<li key={index}>
												<Image
													src="img/equipment/next.png"
													alt={subequipment.name}
													width={500}
													height={500}
												/>
												<p>{subequipment.name}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
