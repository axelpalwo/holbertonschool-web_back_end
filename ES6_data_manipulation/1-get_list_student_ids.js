export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    arr.map((item) => item.id);
    return arr;
  }
  return [];
}
