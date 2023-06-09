const pagination = ref({
	active: false,
	totalPages: 1,
	page: 1,
})

const pageTitle = ref('')

export default () => {
	const backUrl = () => {
		if (pagination.page - 1 == 1 || pagination.page - 1 == 0) return '/'

		return `/p/${parseInt(pagination.page) - 1}`
	}

	const forwardURL = () => `/p/${parseInt(pagination.page) + 1}`

	return {
		pagination,
		pageTitle,
		backUrl,
		forwardURL,
	}
}
