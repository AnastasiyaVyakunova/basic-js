export default function calculateHanoi(diskNumber, turnsSpeed) {
  let t = Math.pow(2, diskNumber) - 1;
  let s = Math.floor(t / turnsSpeed * 3600);
  let hanoi = {
    turns: t,
    seconds: s
  }
  return hanoi;
}