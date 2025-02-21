<script>
	export let data;
	const { course, module, moduleData, error } = data;
</script>

<main class="container mx-auto px-4 py-8">
	{#if error}
		<p class="text-red-600">Sorry, this module could not be found.</p>
	{:else}
		<h1 class="mb-8 text-3xl font-bold">{moduleData.title}</h1>
		<p class="mb-8 text-gray-600">{moduleData.description}</p>

		<div class="space-y-6">
			{#each moduleData.units as unit}
				<a
					href="/{course}/{module}/{unit.id}"
					class="block rounded-lg border p-6 transition-shadow hover:shadow-lg"
				>
					<h2 class="mb-2 text-xl font-semibold">{unit.title}</h2>
					<p class="text-gray-600">{unit.description}</p>
				</a>
			{/each}
		</div>
	{/if}
</main>
