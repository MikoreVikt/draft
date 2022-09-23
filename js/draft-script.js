// .
// .
// .=====================================================================================================
//                                                          ! "SALARY" !
// .
// .
// const minSalary = 1000;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`ЗП работника ${i} - ${salary}`);
//   totalSalary += salary;
// }
// console.log(totalSalary);

// .
// .
// .=====================================================================================================
//                                                          ! "MIN-MAX" !
// .
// .
// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   //   console.log(i);
//   if (i % 2 !== 0) {
//     console.log('Не чётное: ', i);
//     continue;
//   }
//   console.log(`Чётное: `, i);
//   total += i;
// }

// console.log('total: ', total);

// .
// .
// .=====================================================================================================
//                                                          ! "SHOP" !
// .
// .
// const unitPrice = 2000;
// const orderedQuantity = 2;
// const totalPrice = unitPrice * orderedQuantity;
// let customerBalance = 10000;
// let remainder = customerBalance - totalPrice;

// console.log(
//   `Общая стоимость заказа ${totalPrice} кредитов. Проверяем кол-во доступных средств на Вашем счету. Сумма вашего счёта ${customerBalance}`
// );

// if (totalPrice > customerBalance) {
//   console.log(`На счету недостаточно средств для выполнения операции.`);
// } else {
//   console.log(
//     `Успешно! На счету осталось ${remainder}. Операция завершена! Алина-Тян кукуська!!!!!!!!!`
//   );
// }

// .
// .
// .=====================================================================================================
//                                                          ! "Sale" !
// .
// .
// const BASE_DISCOUND = 0;
// const BRONZE_DISCOUND = 0.02;
// const SILVER_DISCOUND = 0.05;
// const GOLD_DISCOUND = 0.1;

// let totalSpend = 2000;
// let paymend = 500;
// let discount = 0;

// if (totalSpend >= 5000) {
//   console.log(`Золотой партнёр, скидка 10%`);
//   discount = GOLD_DISCOUND;
// } else if (totalSpend >= 1000) {
//   console.log(`Серебрянный партнёр, скидка 5%`);
//   discount = SILVER_DISCOUND;
// } else if (totalSpend >= 100) {
//   console.log(`Бронзовый партнёр, скидка 2%`);
//   discount = BRONZE_DISCOUND;
// } else {
//   console.log(`Не партнёр, скидка 0%`);
//   discount = BASE_DISCOUND;
// }
// paymend = paymend - paymend * discount;
// console.log(`Оформляем заказ на сумму ${paymend} со скидкой ${discount * 100}%`);
// totalSpend += paymend;
// console.log(`Общая сумма потраченного теперь ${totalSpend}`);
//.
//.
//.=====================================================================================================
//.
//.
//// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = {
//   privat: 1000,
//   mono: 1500,

//   getSumm() {
//     const card = prompt();
//     if (this.hasOwnProperty(card)) {
//       return this[card];
//     }
//     return `Карты с таким названием нет`;
//   },

//   addCard() {
//     const newCard = prompt();
//     if (!bankSystem.hasOwnProperty(newCard)) {
//       this[newCard] = 0;
//       return `Карта успешно создана`;
//     }
//     return `Такая карта уже существует`;
//   },

//   withdraw() {
//     const nameCard = prompt(`Enter card name`);

//     if (this.hasOwnProperty(nameCard)) {
//       const summ = prompt(`Enter your summ`);
//       if (this[nameCard] >= summ) {
//         return (this[nameCard] -= summ);
//       } else {
//         return `Суммы на карте не достаточно`;
//       }
//     } else {
//       return `Такой карты нет`;
//     }
//   },

//   replenishment() {
//     const nameCard = prompt(`Enter card name`);
//     if (this.hasOwnProperty(nameCard)) {
//       const summ = prompt(`Enter your summ`);
//       return (this[nameCard] += +summ);
//     }
//     return `Такой карты нет`;
//   },
// };

// console.log(bankSystem.getSumm());
// console.log(bankSystem.addCard());
// console.log(bankSystem.withdraw());
// console.log(bankSystem.replenishment());
// console.log(bankSystem);
// ==========================================================================================

// ==========================================================================================
// -----------------------------------------TASK 4------------------------------------------//
//Створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів. (users)
//2 параметр це масив з чоловічими іменами. (mens)
// Функція повина повертати масив з жіночими іменами.

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const mens = ['Artem', 'Maksim', 'David', 'Roman'];

// function sortUsres(users, mens) {
//   const women = [];
//   console.log(users);

//   for (const user of users) {
//     if (!mens.includes(user)) {
//       //   console.log(user);
//       women.push(user);
//     }
//   }
//   //   console.log(womans);
//   return women;
// }

// console.log(sortUsres(users, mens));

// 1. Создать пустой массив вуменс
// 2. Перебрать массив юзерс с помощью фор оф
// 3. Проверить через инклюдс вхождение поточного имени в массив менс
// 4. Если поточное имя не входит в массив менс, пушить его в масси вуменс
// 5. возвращаем массив вуменс с помощью ретерн

// =========================================================================================
// -----------------------------------------TASK 7------------------------------------------//
// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
// const arr = ['Anna', 3, 'Roma', 17, 'Kate', 14, 'Oleg'];

// arr.forEach((el, idx) => {
//   if (typeof el !== 'string') {
//     arr.splice(idx, 1);
//   }
// });

// console.log(arr);
// =========================================================================================
// -----------------------------------------TASK 8------------------------------------------//
// Потрібно створити світлофор за допомогою switch()
// Користувач вводить в prompt() колір який він бачить
// В результаті отримує меседж з дією яку повинен виконати
// Світлофор може мати 4 стани green (GO), yellow (READY),red (STOP), будь що інше означає що сфітлофор не працює (BE CAREFUL)

// const color = prompt();
// switch (color) {
//   case 'green':
//     console.log('GO');
//     break;

//   case 'yellow':
//     console.log('READY');
//     break;

//   case 'red':
//     console.log('STOP');
//     break;

//   default:
//     console.log('BE CAREFUL');
// }

// ==========================================================================================
// -----------------------------------------TASK 9------------------------------------------//
//Створіть функцію, яка приймає 1 параметр
//1 масив імен користувачів, які поставили лайки.
//Функція повертає меседж, як вказано у прикладах:
//Використовувати switch()

// function stringBuilder(users) {
//   switch (users.length) {
//     case 0:
//       return 'no one likes this';
//       break;

//     case 1:
//       return `${users[0]} likes this`;
//       break;

//     case 2:
//       return `${users[0]} and ${users[1]} like this`;
//       break;

//     case 3:
//       return `${users[0]}, ${users[1]} and ${users[2]} like this`;
//       break;

//     default:
//       return `${users[0]}, ${users[1]} and ${users.length - 2} others like this`;
//       break;
//   }
// }

// console.log(stringBuilder([])); //"no one likes this";
// console.log(stringBuilder(['Peter'])); //"Peter likes this";
// console.log(stringBuilder(['Jacob', 'Alex'])); //"Jacob and Alex like this";
// console.log(stringBuilder(['Max', 'John', 'Mark'])); //"Max, John and Mark like this";
// console.log(stringBuilder(['Alex', 'Jacob', 'Mark', 'Max'])); //"Alex, Jacob and 2 others like this";

// =========================================================================================
// -----------------------------------------TASK 10-----------------------------------------//
// Cтворити функцію яка буде приймати 1 параметр та знаходити в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// 1 масив чисел (arr) //[1, 2, 3, 2, 1, 17, 19]

// function getCommonElements(array) {
//   const uniqueNumbers = array.filter((el, idx, arr) => arr.indexOf(el) === idx);

//   return uniqueNumbers;
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));

//.
//.
//.=====================================================================================================
//.
//.
