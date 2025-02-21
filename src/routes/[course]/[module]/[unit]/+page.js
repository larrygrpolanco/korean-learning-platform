import { loadJson } from '$lib/utils/loadContent';

export async function load({ params }) {
	const { course, module, unit } = params;

	// Load the unit content from our JSON file
	const unitData = await loadJson(`/src/lib/data/${course}/${module}/${unit}/content.json`);

	if (!unitData) {
		return {
			course,
			module,
			unit,
			error: 'Unit not found'
		};
	}

	return {
		course,
		module,
		unit,
		unitData
	};
}
