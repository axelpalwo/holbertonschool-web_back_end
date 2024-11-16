export default function appendToEachArrayValue(array, appendString) {
  const result = []; // Create a new array to avoid modifying the original one
  for (const value of array) {
    result.push(appendString + value);
  }
  return result;
}
