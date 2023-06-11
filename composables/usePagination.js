const pagination = ref({
	active: false,
	totalPages: 1,
	page: 1,
})

const pageTitle = ref('')

export default () => {
	const backUrl = () => {
		if (pagination.page - 1 == 1 || pagination.page - 1 == 0) return ''

		const value = pagination.page - 1
		return `?p=${value}`
	}

	const forwardURL = () => `?p=${pagination.page + 1}`

	return {
		pagination,
		pageTitle,
		backUrl,
		forwardURL,
	}
}
