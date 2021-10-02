export default function sortByHeight(arr) {
  let arr2 = arr.slice().sort(function(l, r) {
    return l - r;
  });
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      while (arr2[j] === -1) j++;
      arr[i] = arr2[j];
      j++;
    }
  }
  return arr;
}