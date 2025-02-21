// This function helps us load JSON files in a consistent way
// We use the .json() method to parse the JSON response
/**
 * @param {string} path - Path to the JSON file
 * @returns {Promise<object|null>} The parsed JSON data or null if error
 */
async function loadJson(path) {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
    return null;
  }
}

export { loadJson };