export default function encodeLine(str) {
  if (str === '') return str;
  let arr = str.split('');
  let result = [[1, arr[0]]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === result[result.length - 1][1]) {
      result[result.length - 1][0] += 1;
    } else {
      result.push([1, arr[i]]);
    }
  }
  let str1 = '';
  for (let i = 0; i < result.length; i++) {
    if(result[i][0] !== 1)
      str1 += result[i][0] + result[i][1];
    else
      str1 += result[i][1];
  }
  return str1;
}