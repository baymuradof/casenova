import { getBlogsList } from "@/entitis/blog-api"
import React from "react"
import { useTranslation } from "react-i18next"
import useSWR from "swr"

import { apiKeys } from "@/shared/constants/api-keys"

interface Blog {
	createdAt: string
	title: string
}

export const BlogHero = () => {
	const { t } = useTranslation()
	const { data: blogsList, error } = useSWR(apiKeys.blog, getBlogsList)
	console.log("hello", apiKeys.blog)

	if (error) return <div></div>
	if (!blogsList) return <div></div>

	return (
		<div className="blog">
			<div className="container">
				<div className="blog__body">
					<h2 className="blog__body--title">{t("blog")}</h2>
					<p className="blog__body--text">{t("professionalDoctors")}</p>
					<div className="blog__body--block">
						{blogsList.map((blog: Blog, index: number) => (
							<div
								key={index}
								className="blog__body--block--row--img modal-aricle modalBtn"
							>
								<p>{blog.createdAt}</p>
								<h3>{blog.title}</h3>
							</div>
						))}
					</div>
					<button id="see-more" className="blog__body--button">
						{t("seeMore")}
					</button>
				</div>
			</div>
		</div>
	)
}
