export default function getDNSStats(domains) {
  let map = new Map();
  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split('.');
    let name = '';
    for (let j = arr.length - 1; j >= 0; j--) {
      name += `.${arr[j]}`;
      if (map.has(name)) {
        map.set(name, map.get(name) + 1);
      } else {
        map.set(name, 1);
      }
    }
  }
  return Object.fromEntries(map);
}