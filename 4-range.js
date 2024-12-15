'use strict';

/* 4. Реалізуйте функцію `range(start: number, end: number): array`
      яка віддає масив чисел з діапазону `[15, 30]`, включаючи крайні числа.
*/

const range = (start, end) => {
  const arrayLen = end - start + 1;
  // (2 в степені 32) - 1 = 4294967295
  if (arrayLen < 1 || arrayLen > 4294967295) return [];
  const arrayOfNumber = new Array(arrayLen);
  let n = start;
  for (let i = 0; i < arrayLen; i++) { arrayOfNumber[i] = n++; }
  return arrayOfNumber;
};

//console.dir(range(15, 30));
module.exports = { range };
