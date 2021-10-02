export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  }
  catch(e) {
    throw new Error('Invalid date!');
  }
  let month = date.getMonth();
  if (month < 2) return 'winter';
  if (month < 5) return 'spring';
  if (month < 8) return 'summer';
  if (month < 11) return 'fall';
  return 'winter';
}