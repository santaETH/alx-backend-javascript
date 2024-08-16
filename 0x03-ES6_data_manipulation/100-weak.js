// Export a const instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the weakMap
  if (weakMap.has(endpoint)) {
    // Increment the count of the endpoint queries
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // If the count is 5 or more, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not in the weakMap, add it with an initial count of 1
    weakMap.set(endpoint, 1);
  }
}
