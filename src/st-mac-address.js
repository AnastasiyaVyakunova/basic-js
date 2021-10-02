export default function isMAC48Address(inputString) {
  let reg = /([A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2}/;
  return reg.test(inputString);
}