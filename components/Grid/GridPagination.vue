<script setup>
const { pagination, backUrl, forwardURL } = usePagination()
const back = ref(backUrl())
const fwd = ref(forwardURL())
</script>

<template>
	<div
		class="item xs-text-center bg-gray-100 border-b border-gray-300 py-4 relative"
	>
		<div class="flex px-2 justify-center w-full relative">
			<div
				class="xs-absolute self-center xs-l1 xs-text-6 text-gray-lighter xs-mr2 absolute left-[10px]"
			>
				<span class="bold text-gray-500"
					>Page {{ pagination.page || 1 }} / {{ pagination.totalPages }}</span
				>
			</div>

			<div class="pagination">
				<nuxt-link
					exact
					:to="back"
					tag="button"
					class="relative border cursor-pointer border-gray-200 text-blue-500 bg-white float-left transition duration-150 ease-in p-2"
					:class="{ 'pagination__button--disabled': pagination.page <= 1 }"
				>
					<svg
						class="pagination__button--prev-icon w-[20px] h-[20px]"
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M368.619 16.892l24.485 24.449c2.938 2.934 4.897 7.335 4.897 11.246 0 3.912-1.959 8.313-4.897 11.246l-192.448 192.168 192.448 192.168c2.938 2.934 4.897 7.335 4.897 11.246 0 4.401-1.959 8.313-4.897 11.246l-24.485 24.449c-2.938 2.934-7.345 4.89-11.263 4.89s-8.325-1.956-11.263-4.89l-228.196-227.864c-2.938-2.934-4.897-7.335-4.897-11.246 0-3.912 1.959-8.313 4.897-11.246l228.196-227.864c2.938-2.934 7.345-4.89 11.263-4.89s8.325 1.956 11.263 4.89v.002z"
						/>
					</svg>
				</nuxt-link>

				<nuxt-link
					:to="fwd"
					tag="button"
					class="relative cursor-pointer border border-gray-200 text-blue-500 bg-white float-left transition duration-150 ease-in p-2"
					:class="{
						'pagination__button--disabled':
							pagination.page >= pagination.totalPages,
					}"
				>
					<svg
						class="pagination__button--next-icon w-[20px] h-[20px]"
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M142.382 16.892l-24.485 24.449c-2.938 2.934-4.897 7.335-4.897 11.246 0 3.912 1.959 8.313 4.897 11.246l192.448 192.168-192.448 192.168c-2.938 2.934-4.897 7.335-4.897 11.246 0 4.401 1.959 8.313 4.897 11.246l24.485 24.449c2.938 2.934 7.345 4.89 11.263 4.89s8.325-1.956 11.263-4.89l228.196-227.864c2.938-2.934 4.897-7.335 4.897-11.246 0-3.912-1.959-8.313-4.897-11.246l-228.196-227.864c-2.938-2.934-7.345-4.89-11.263-4.89s-8.325 1.956-11.263 4.89v.002z"
						/>
					</svg>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>
