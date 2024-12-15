'use strict';

/* 10. Реалізуйте зберігання телефонних номерів на хеш-таблицях,
       тобто довідниках (об'єктах чи Map).
- Задайте довідник (об'єкт) із ключами рівними значенням поля `name`
  (з попереднього прикладу) і значеннями з поля `phone`.
- Реалізуйте функцію `findPhoneByName` з сигнатурою
  `findPhoneByName(name: string): string` яка знаходить телефон у хеші по імені
  та повертає номер телефону. Використовуйте `hash[key]` для пошуку телефону.
*/

const phonebook = {
  'Marcus Aurelius': '+380445554777',
  'Octavian Augustus': '+380445554888',
  'Marcus Cato': '+380445554999',
};

const findPhoneByName = (name) => phonebook[name];

//console.log(findPhoneByName('Octavian Augustus'));
module.exports = { phonebook, findPhoneByName };
