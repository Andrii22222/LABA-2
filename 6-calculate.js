'use strict';

/* 6. Вкладені виклики функцій у циклі
- Реалізуйте функцію `average` з сигнатурою
 `average(a: number, b: number): number`
  що обчислює середнє арифметичне своїх аргументів.
- Реалізуйте функцію `square` із сигнатурою `square(x: number): number`
  що обчислює квадрат свого аргументу.
- Реалізуйте функцію `cube` із сигнатурою `cube(x: number): number`
  що обчислює куб свого аргументу.
- Викличте функції `square` та `cube` у циклі від 0 до 9, обчислюючи,
  відповідно квадрат та куб від змінної циклу.
  Передайте квадрат і куб на кожній ітерації в функцію `average`.
  Результати складіть у масив і поверніть із функції `calculate`.
 */

const square = (x) => x * x;
const cube = (x) => x * x * x;
const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const arrayOfAverage = [];
  for (let i = 0; i <= 9; i++) {
    const x = average(square(i), cube(i));
    arrayOfAverage.push(x);
  }
  return arrayOfAverage;
};

//console.dir(calculate());
module.exports = { square, cube, average, calculate };
