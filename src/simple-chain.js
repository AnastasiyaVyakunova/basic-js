class ChainMaker {
  constructor() {
    this.str = [];
  }
  
  getLength = function() { return this.str.length }

  addLink = function(value) {
    if(this.str.length !== 0) this.str.push(`~~`);
    if (value === undefined) this.str.push(`( )`);
    this.str.push(`( ${value} )`);
    return this;
  }

  removeLink = function(position) {
    let error = new Error('You can\'t remove incorrect link!');
    if (Number.isInteger(position) === false) {
      this.str = [];
      throw error;
    }
    position--;
    if (position * 2 > -1 && position * 2 < this.str.length) {
      if (position * 2 !== this.str.length - 1) {
        this.str.splice(position * 2, 2);
      } else {
        this.str.splice(position * 2, 1);
      }
      return this;
    }
    this.str = [];
    throw error;
  }

  reverseChain = function() {
    this.str.reverse();
    return this;
  }
  
  finishChain = function() {
    let chain = this.str.join('');
    this.str = [];
   return chain;
  }
}

let chainMaker = new ChainMaker();
export default chainMaker;
