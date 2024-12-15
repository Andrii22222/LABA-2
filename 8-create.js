'use strict';

/* 8. Реалізуйте функцію 'createUser'
      з сигнатурою `createUser(name: string, city: string): object`.
  Приклад виклику: `createUser('Marcus Aurelius', 'Roma')`
  функція повинна повернути об'єкт
  `{ name: 'Marcus Aurelius', city: 'Roma' }`
*/

//const createUser = (name, city) => ({ name: name, city: city });
const createUser = (name, city) => ({ name, city });

//console.dir(createUser('Marcus Aurelius', 'Roma'));
module.exports = { createUser };
