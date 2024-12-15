'use strict';

/* 5. Реалізуйте функцію `rangeOdd(start: number, end: number): array` яка
      віддає масив непарних чисел з діапазону `[15, 30]`,
      включаючи крайні числа.
*/

const rangeOdd = (start, end) => {
  const arrayLen = Math.ceil((end - start) / 2);
  // (2 в степені 32) - 1 = 4294967295
  if (arrayLen < 1 || arrayLen > 4294967295) return [];
  const arrayOfNumber = new Array(arrayLen);
  let n = start % 2 !== 0 ? start : start + 1;
  for (let i = 0; i < arrayLen; i++) {
    arrayOfNumber[i] = n;
    n += 2;
  }
  return arrayOfNumber;
};

//console.dir(rangeOdd(15, 30));
module.exports = { rangeOdd };
