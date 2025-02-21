export function load({ params }) {
	return {
		course: params.course,
		module: params.module,
		unit: params.unit
	};
}
