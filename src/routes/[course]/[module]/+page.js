import { loadJson } from '$lib/utils/loadContent';

export async function load({ params }) {
	const { course, module } = params;

	// Load the module data from our JSON file
	const moduleData = await loadJson(`/src/lib/data/${course}/${module}/module.json`);

	if (!moduleData) {
		return {
			course,
			module,
			error: 'Module not found'
		};
	}

	return {
		course,
		module,
		moduleData
	};
}
