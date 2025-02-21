<script>
	// Access the course parameter from the URL
	export let data;

	// This would eventually come from your JSON data
	const modules = [
		{
			id: 'module-1',
			title: 'Basic Conversations',
			description: 'Learn fundamental conversation patterns and vocabulary'
		}
		// Add more modules as needed
	];
</script>

<main class="container mx-auto px-4 py-8">
	<!-- Navigation breadcrumb helps users know where they are -->
	<div class="mb-4 text-sm">
		<a href="/" class="text-blue-600 hover:underline">Home</a>
		<span class="mx-2">›</span>
        <span>{data.course.charAt(0).toUpperCase() + data.course.slice(1)}</span>
	</div>
	<h1 class="mb-8 text-3xl font-bold">
		{data.course.charAt(0).toUpperCase() + data.course.slice(1)} Course
	</h1>

	<div class="space-y-6">
		{#each modules as module}
			<a
				href="/{data.course}/{module.id}"
				class="block rounded-lg border p-6 transition-shadow hover:shadow-lg"
			>
				<h2 class="mb-2 text-xl font-semibold">{module.title}</h2>
				<p class="text-gray-600">{module.description}</p>
			</a>
		{/each}
	</div>
</main>
