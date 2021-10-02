export default function transform(arr) {
  let error = new Error(`'arr' parameter must be an instance of the Array!`);
  if (Array.isArray(arr) === false) throw error;
  let tArr = [];
  for ( let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        if (arr[i + 1] === '--double-prev' || arr[i + 1] === '--discard-prev') i++;
        break;
      case '--discard-prev':
        if (tArr.length !== 0) tArr.pop();
        break;
      case '--double-next':
        if (arr[i + 1] !== undefined) tArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (tArr.length !== 0) tArr.push(arr[i - 1]);
        break;
      default:
        tArr.push(arr[i]);
        break;
    }
  }
  return tArr;
}