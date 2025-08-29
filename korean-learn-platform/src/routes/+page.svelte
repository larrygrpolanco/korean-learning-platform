<script>
	import LessonCard from '$lib/components/lesson/LessonCard.svelte';

	// Sample lesson data - will be moved to server-side loading later
	const lessons = [
		{
			id: 'market-ordering',
			title: 'Fish Market Ordering',
			description: 'Learn to order fish at Noryangjin Market. Practice colors and fish names in Korean.',
			difficulty: 'beginner',
			estimatedTime: '10-15 minutes',
			tags: ['vocabulary', 'speaking', 'food', 'shopping']
		},
		{
			id: 'restaurant-ordering',
			title: 'Restaurant Ordering',
			description: 'Order meals and interact with restaurant staff in Korean.',
			difficulty: 'beginner',
			estimatedTime: '15-20 minutes',
			tags: ['vocabulary', 'speaking', 'food', 'dining']
		},
		{
			id: 'shopping-clothes',
			title: 'Shopping for Clothes',
			description: 'Describe preferences, sizes, and colors when shopping for clothing.',
			difficulty: 'intermediate',
			estimatedTime: '12-18 minutes',
			tags: ['vocabulary', 'speaking', 'shopping', 'colors']
		}
	];
</script>

<svelte:head>
	<title>Korean Learning Platform</title>
	<meta name="description" content="Learn Korean through interactive scenarios and real-world practice" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Header -->
	<header class="bg-white shadow-sm border-b border-gray-200">
		<div class="max-w-4xl mx-auto px-4 py-6">
			<div class="text-center">
				<h1 class="text-3xl font-bold text-gray-900 mb-2">
					Korean Learning Platform
				</h1>
				<p class="text-gray-600 max-w-2xl mx-auto">
					Learn Korean through interactive scenarios and real-world practice. 
					Each lesson is designed to build confidence in authentic Korean conversations.
				</p>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="max-w-4xl mx-auto px-4 py-8">
		<!-- Lessons Grid -->
		<section>
			<div class="mb-6">
				<h2 class="text-2xl font-semibold text-gray-900 mb-2">Available Lessons</h2>
				<p class="text-gray-600">Choose a lesson to start practicing Korean in real-world scenarios.</p>
			</div>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each lessons as lesson}
					<LessonCard {lesson} />
				{/each}
			</div>
		</section>

		<!-- Coming Soon Section -->
		<section class="mt-12 text-center">
			<div class="bg-white rounded-lg border border-gray-200 p-8">
				<h3 class="text-xl font-semibold text-gray-900 mb-2">More Lessons Coming Soon</h3>
				<p class="text-gray-600 mb-4">
					We're working on additional scenarios including directions, phone conversations, 
					and business interactions.
				</p>
				<div class="flex flex-wrap justify-center gap-2 text-sm">
					<span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Getting Directions</span>
					<span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Phone Calls</span>
					<span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Business Meetings</span>
					<span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Travel Scenarios</span>
				</div>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="bg-white border-t border-gray-200 mt-16">
		<div class="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600 text-sm">
			<p>A modular Korean language learning platform focused on real-world scenarios.</p>
		</div>
	</footer>
</div>
