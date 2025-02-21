<!-- src/routes/[course]/[module]/[unit]/+page.svelte -->
<script>
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';
	export let data;
	const { course, module, unit, unitData, error } = data;
</script>

<main class="container mx-auto px-4 py-8">
	{#if error}
		<p class="text-red-600">Sorry, this unit could not be found.</p>
	{:else}
		<h1 class="mb-8 text-3xl font-bold">{unitData.title}</h1>
		<p class="mb-8 text-gray-600">{unitData.description}</p>

		<div class="space-y-12">
			{#each unitData.sections as section}
				<section class="rounded-lg border p-6">
					<h2 class="mb-4 text-2xl font-semibold">{section.title}</h2>
					<p class="mb-6 text-gray-600">{section.description}</p>

					{#if section.content}
						<div class="prose mb-6">{section.content}</div>
					{/if}

					{#if section.audio}
						<AudioPlayer src={section.audio.file} title={section.audio.title} />
					{/if}

					{#if section.images}
						<div class="mt-6 space-y-4">
							{#each section.images as image}
								<figure>
									<img src={image.src} alt={image.alt} class="max-w-full rounded-lg shadow-lg" />
									{#if image.title}
										<figcaption class="mt-2 text-center text-sm text-gray-600">
											{image.title}
										</figcaption>
									{/if}
								</figure>
							{/each}
						</div>
					{/if}
				</section>
			{/each}
		</div>
	{/if}
</main>
