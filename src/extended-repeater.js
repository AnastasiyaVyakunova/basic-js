export default function repeater(str, options) {
  let result = '';
  if (str === null) str = 'null';
  if (typeof str !== 'string') str =`${str}`;
  let addR = '';
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition !== undefined && options.additionRepeatTimes !== undefined) {
    if (options.addition === null) options.addition = 'null';
    if (typeof options.addition !== 'string') options.addition = `${options.addition}`;
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (i === options.additionRepeatTimes - 1) {
        addR += options.addition;
      } else if (options.additionSeparator !== undefined) {
        addR += options.addition + options.additionSeparator;
      } else {
        addR += options.addition + '|';
      }
    }
  }
  if (options.repeatTimes !== undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (i === options.repeatTimes - 1) {
        result += str + addR;
      } else if (options.separator !== undefined) {
        result += str + addR + options.separator;
      } else {
        result += str + addR + '+';
      }
    }
  }
  return result;
}