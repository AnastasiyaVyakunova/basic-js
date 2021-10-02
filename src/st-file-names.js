export default function renameFiles(names) {
  let arrCount = {counters : new Array(names.length)}; 
  
  for (let i = 0; i < names.length; i++) {
    arrCount.counters[i] = 0;
    let name = names[i];
    let j = 0
    for (; j < i; j++) {
      if (names[j] === name) { 
        arrCount.counters[j] += 1;
        break;
      }
    }
    if(arrCount.counters[j] != 0)
      names[i] = `${name}(${arrCount.counters[j]})`;
    else
      names[i] = `${name}`;
  }
  return names;
}