import { loadJson } from '$lib/utils/loadContent';

export async function load({ params }) {
	// Get the course name from the URL parameters
	const { course } = params;

	// Load the course data from our JSON file
	const courseData = await loadJson(`/src/lib/data/${course}/course.json`);

	// If we couldn't find the course, we'll handle that in the page
	if (!courseData) {
		return {
			course,
			error: 'Course not found'
		};
	}

	return {
		course,
		courseData
	};
}
