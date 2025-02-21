<script>
	export let data;
	const { course, courseData, error } = data;
</script>

<main class="container mx-auto px-4 py-8">
	{#if error}
		<p class="text-red-600">Sorry, this course could not be found.</p>
	{:else}
		<h1 class="mb-8 text-3xl font-bold">{courseData.title}</h1>

		<div class="space-y-6">
			{#each courseData.modules as module}
				<a
					href="/{course}/{module.id}"
					class="block rounded-lg border p-6 transition-shadow hover:shadow-lg"
				>
					<h2 class="mb-2 text-xl font-semibold">{module.title}</h2>
					<p class="text-gray-600">{module.description}</p>
				</a>
			{/each}
		</div>
	{/if}
</main>
