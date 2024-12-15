'use strict';

/* 7. Виконайте такі пункти всередині функції `fn`
      (див. приклад: `7-objects.js`)
- Створіть об'єкт з одним полем `name`
  і запишіть посилання на нього в константу.
- Створіть об'єкт з одним полем `name`
  і запишіть посилання на нього в змінну.
- Спробуйте змінити значення поля `name` в обох об'єктів.
- Спробуйте записати посилання на інший об'єкт в обидва ідентифікатори.
- Поясніть поведінку коду та залиште лише робочий код.
*/

const fn = () => {
  const obj1 = { name: 'Name' };
  let obj2 = { name: 'Name' };
  //console.log(obj1.name);
  //console.log(obj2.name);

  //Спробуйте змінити значення поля `name` в обох об'єктів.
  obj1.name = 'NewName';
  obj2.name = 'NewName';
  //console.log(obj1.name);
  //console.log(obj2.name);

  //Спробуйте записати посилання на інший об'єкт в обидва ідентифікатори.
  //TypeError: Assignment to constant variable.
  //obj1 = { name: 'Enother Name' };
  obj2 = { name: 'Enother Name' };
  //console.log(obj1.name);
  //console.log(obj2.name);
};

//fn();
module.exports = { fn };
