export const state = () => ({
	files: []
})

export const mutations = {
	add(state: any, file: any) {
		state.files.push(file)
	},
	remove(state: any, { file }: { file: any }) {
		state.files.splice(state.list.indexOf(file), 1)
	}
}