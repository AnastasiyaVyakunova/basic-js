export default function getCommonCharacterCount (s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    let index = s2.indexOf(s1[i]);
    if (index !== -1) {
      s2 = s2.slice(0, index) + s2.slice(index + 1);
      count++;
    }
  }
  return count;
}