// This function runs on the server to load data for the page
export function load({ params }) {
	// Return the course parameter from the URL
	return {
		course: params.course
	};
}
