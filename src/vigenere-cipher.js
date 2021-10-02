export default class VigenereCipheringMachine {
  
  constructor(direct = true)
  {
    this.direction = direct;
    this.error = 'Incorrect arguments!';
    this.shift = 'A'.charCodeAt(0);
  }

  createRightKey(message, key)
  {
    let size = key.length;
    let newKey = '';
    let index = 0;
    for(let i = 0; index < Math.min(key.length, message.length); i++) {
      if(message[i] === ' ') {
        newKey += ' ';
        continue;
      }
      newKey += key[index];
      index++;
    }
    index = 0;
    for (let i = newKey.length; i < message.length; i++) {
      if(message[i] === ' ') {
        newKey += ' ';
        continue;
      }
      newKey += key[index % size];
      index++;
    }
    return newKey;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error(this.error);
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let newKey = this.createRightKey(message, key);
    let str = '';
    for (let i = 0; i < newKey.length; i++) {
      let reg = /[A-Z]/;
      if (!reg.test(message[i])) {
        str += message[i];
        continue;
      }
      str += String.fromCharCode((((message.charCodeAt(i) - this.shift) + (newKey.charCodeAt(i) - this.shift)) % 26) + this.shift);
    }
    if (!this.direction) {
      return str.split('').reverse().join('');
    }
    return str;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error(this.error);
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let newKey = this.createRightKey(message, key);
    let str = '';
    for (let i = 0; i < newKey.length; i++) {
      let reg = /[A-Z]/;
      if (!reg.test(message[i])) {
        str += message[i];
        continue;
      }
      str += String.fromCharCode((((message.charCodeAt(i) - this.shift) + 26 - (newKey.charCodeAt(i) - this.shift)) % 26) + this.shift);
    }
    if (!this.direction) {
      return str.split('').reverse().join('');
    }
    return str;
  }
}