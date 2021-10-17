const generateId = (name) => {
	// (Math.random() + 1).toString(36).substring(7)
	return name + new Date().getTime()
}

export const state = () => ({
	categories: [],
	selectedCategories: []
})

export const mutations = {
	saveCategory: (state, category) => {
		if (category.id) {
			const cat = state.categories.find(c => c.id === category.id)
			if(cat) {
				const index = state.categories.findIndex(c => c.id === category.id)
				state.categories[index] = {
					...cat,
					...category,
					keyWords: category.keyWords.split(',')
				}
			}
		} else {
			state.categories.push({
				...category,
				id: generateId(category.name),
				keyWords: category.keyWords.split(',')
			})
		}
	},
	selectCategory: (state, id) => {
		console.log(id)
		const alreadyExists = state.selectedCategories.some((category) => category === id);

		if (alreadyExists) {
			state.selectedCategories = state.selectedCategories.filter(category => category !== id)
		} else {
			state.selectedCategories.push(id)
		}
	},
	deleteCategory: (state, id) => {
		state.categories = state.categories
			.filter((category) => category.name !== id)
	}
};
