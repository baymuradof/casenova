import clientApi from "@/shared/api/base-api"
import { apiKeys } from "@/shared/constants/api-keys"

export interface IBlogsList {
	id: number
	name: string
	title: string
	content: string
	image: string
	createdAt: string
	updatedAt: string
}

export const getBlogsList = async (): Promise<any> => {
	const response = await clientApi.get(apiKeys.blog)
	return response?.data?.data
}

export const getGalleryList = async (): Promise<any> => {
	const response = await clientApi.get(apiKeys.galleries)
	return response?.data?.data
}

export const getServicesList = async (): Promise<any> => {
	const response = await clientApi.get(apiKeys.services)
	return response?.data?.data
}

export const getEquipmentList = async (): Promise<any> => {
	const response = await clientApi.get(apiKeys.equipment)
	return response?.data?.data
}
export const getVacanciesList = async (): Promise<any> => {
	const response = await clientApi.get(apiKeys.vacancies)
	return response?.data?.data
}

export const getReviewsList = async (): Promise<any> => {
	const response = await clientApi.get(apiKeys.reviews)
	return response?.data?.data
}
