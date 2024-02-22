import { getGalleryList } from "@/entitis/blog-api"
import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import useSWR from "swr"

interface GalleryItem {
	image: string
}

export const GalleryHero = () => {
	const { t } = useTranslation()
	const { data: galleryData, error } = useSWR("apiKeys.gallery", getGalleryList)

	if (!galleryData) return <div>Loading...</div>

	if (error) return <div>Error fetching data</div>

	return (
		<div className="gallery">
			<div className="container">
				<div className="gallery__body">
					<h2 className="gallery__body--title">{t("gallery")}</h2>
					<p className="gallery__body--text">{t("professionalDoctors")}</p>
					<div className="gallery__body--block">
						{galleryData.map((galleryItem: GalleryItem, index: number) => (
							<GalleryItemComponent key={index} image={galleryItem.image} />
						))}
					</div>
					<button id="see-more" className="gallery__body--button">
						{t("seeMore")}
					</button>
				</div>
			</div>
		</div>
	)
}

const GalleryItemComponent: React.FC<GalleryItem> = ({ image }) => {
	console.log(image)

	return (
		<div className="gallery__body--block-item">
			<Image
				className="gallery__body--block-img"
				src={image}
				alt="gallery"
				width={500}
				height={500}
			/>
		</div>
	)
}
