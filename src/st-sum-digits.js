export default function getSumOfDigits(n) {
  let str = n.toString();
  if (str.length > 1) {
    let a = Array.from(str.split(''), Number);
    let reducer = (prevValue, curValue) => prevValue + curValue;
    let p = a.reduce(reducer, 0);
    return getSumOfDigits(p);
  }
  return n;
}