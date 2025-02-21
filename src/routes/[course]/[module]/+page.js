// This function provides the module and course parameters to our page
export function load({ params }) {
	return {
		course: params.course,
		module: params.module
	};
}
