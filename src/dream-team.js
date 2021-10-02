export default function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  if (members.length === 0) return false;
  let result = '';
  for (let i = 0; i <members.length; i++) {
    if (typeof members[i] === 'string') {
      let str = members[i].trim().toUpperCase();
      result += str[0];
    }
  }
  return result.split('').sort().join('');
}