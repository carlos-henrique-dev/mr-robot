export const state = () => ({
	files: [],
})

export const mutations = {
	addFile: (state, newFile) => {
		const alreadyExists = state.files.find((file) => file.name === newFile.name);
		if (!alreadyExists) {
			state.files.push(newFile)
		}
	},
	removeFile: (state, name) => (state.files = state.files.filter((file) => file.name !== name)),
};

