import create from "zustand"

import { getBlogsList, IBlogsList } from "."

interface IBlogsState {
	blogsList?: IBlogsList[]
}

interface IBlogs extends IBlogsState {
	fetchBlogs: () => Promise<void>
	reset: () => void
}

const state = {
	blogsList: [],
}

export const useBlogsStore = create<IBlogs>((set, get) => ({
	...state,
	fetchBlogs: async () => {
		const blogsList = await getBlogsList()
		if (get().blogsList?.length) return
		set({ blogsList })
	},

	reset: () => {
		set(state)
	},
}))
