export default function getStudentsByLocation(list, city) {
  return list.filter((obj) => obj.city === city);
}
