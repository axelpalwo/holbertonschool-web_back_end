export default function appendToEachArrayValue(array, appendString) {
  array.map((item) => appendString + item);
  return array;
}
