export default function returnHowManyArguments(...args) {
  let i = 0;
  for (const arg of args) {
    i += 1;
    console.log(arg)
  }
  return i;
}
