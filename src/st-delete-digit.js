export default function deleteDigit(n) {
  n = n.toString();
  let arr = [];
  if (n.length === 1) return Number(n);
  for (let i = 0; i < n.length; i++) {
    let p = n.slice(0 , i) + n.slice(i + 1);
    arr.push(Number(p));
  }
  arr.sort(function(l, r) {
    return l - r;
  });
  return arr[arr.length - 1];
}