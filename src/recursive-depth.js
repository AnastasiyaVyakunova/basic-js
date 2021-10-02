export default class DepthCalculator {
  constructor () {
  }

  calculateDepth (arr) {
    let maxSubDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let subDepth = this.calculateDepth(arr[i]);
        if (maxSubDepth < subDepth) {
          maxSubDepth = subDepth;
        }
      }
    }
    return maxSubDepth + 1;
  }
}
