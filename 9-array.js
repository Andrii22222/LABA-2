'use strict';

/* 9. Реалізуйте зберігання телефонних номерів у масиві об'єктів.
- Оголосіть масив об'єктів з двома полями:
  `name` та `phone` для зберігання даних.
Приклад об'єкта:
  `{ name: 'Marcus Aurelius', phone: '+380445554433' }`
і додайте декілька об'єктів у масив, щоб було на чому перевіряти.
- Реалізуйте функцію `findPhoneByName`
з сигнатурою `findPhoneByName(name: string): string`.
Під час виклику функція повинна знаходити об'єкт,
де поле `name` дорівнює аргументу `name` і повертати номер телефону.
Для пошуку скористайтесь циклом `for`.
*/

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554777' }];
phonebook.push({ name: 'Octavian Augustus', phone: '+380445554888' });
phonebook.push({ name: 'Marcus Cato', phone: '+380445554999' });

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
  return 'n/a';
};

//console.log(findPhoneByName('Marcus Cato'));
module.exports = { phonebook, findPhoneByName };
