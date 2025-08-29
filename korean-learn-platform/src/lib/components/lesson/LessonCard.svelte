<script>
	import Card from '../ui/Card.svelte';
	import Button from '../ui/Button.svelte';

	/**
	 * Lesson preview card for homepage navigation
	 * @type {Object} lesson - Lesson data object
	 * @type {string} lesson.id - Lesson identifier
	 * @type {string} lesson.title - Lesson title
	 * @type {string} lesson.description - Lesson description
	 * @type {string} lesson.difficulty - Difficulty level
	 * @type {string} lesson.estimatedTime - Estimated completion time
	 * @type {Array} lesson.tags - Lesson tags/categories
	 */
	let {
		lesson,
		...restProps
	} = $props();

	// Difficulty color mapping
	const difficultyColors = {
		beginner: 'bg-green-100 text-green-800',
		intermediate: 'bg-yellow-100 text-yellow-800',
		advanced: 'bg-red-100 text-red-800'
	};

	const difficultyColor = $derived(difficultyColors[lesson.difficulty] || difficultyColors.beginner);
</script>

<Card variant="elevated" clickable={false} {...restProps}>
	<div class="space-y-4">
		<!-- Lesson Header -->
		<div class="flex justify-between items-start">
			<h3 class="text-lg font-semibold text-gray-900 leading-tight">
				{lesson.title}
			</h3>
			<span class="px-2 py-1 text-xs font-medium rounded-full {difficultyColor}">
				{lesson.difficulty}
			</span>
		</div>

		<!-- Lesson Description -->
		<p class="text-gray-600 text-sm leading-relaxed">
			{lesson.description}
		</p>

		<!-- Lesson Meta Information -->
		<div class="flex items-center justify-between text-sm text-gray-500">
			<span class="flex items-center">
				<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				{lesson.estimatedTime}
			</span>
			
			{#if lesson.tags && lesson.tags.length > 0}
				<div class="flex gap-1">
					{#each lesson.tags.slice(0, 2) as tag}
						<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
							{tag}
						</span>
					{/each}
					{#if lesson.tags.length > 2}
						<span class="text-xs text-gray-400">+{lesson.tags.length - 2}</span>
					{/if}
				</div>
			{/if}
		</div>

		<!-- Action Button -->
		<div class="pt-2">
			<Button 
				variant="primary" 
				size="medium" 
				fullWidth={true}
				onclick={() => window.location.href = `/lessons/${lesson.id}`}
			>
				Start Lesson
			</Button>
		</div>
	</div>
</Card>
