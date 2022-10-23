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
//.
// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));
//.
//.
//.
//.============================================================================================================================
// ---------------------------------------------------------TASK------------------------------------------------------------//
//.
// Стоврити функцію яка буде перебирати масив обєктів (films),з кожного обєкта потрібно взяти IDs жанрів фільмів та знайти
// їх в іншому єбєкті який буде містити в собі ID та назву жанру відповідну до цего ID.
// Функція повертає стрінгу з назвами фільмів та жанрами до яких цей фільм входить, якщо кількість жанрів більше двох потрібно
//  вивести назву перших двох жанрів і додати надпис 'Others'.
// В результаті маємо отримати:
//
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'

// const films = [
//   {
//     title: 'Interceptor',
//     genre_ids: [28, 53, 12],
//   },
//   {
//     title: 'Fantastic Beasts: The Secrets of Dumbledore',
//     genre_ids: [14, 12, 28],
//   },
//   {
//     title: 'Last Seen Alive',
//     genre_ids: [28, 53],
//   },
//   {
//     title: 'Jurassic World Dominion',
//     genre_ids: [878, 28, 12, 53],
//   },
// ];

// const genres = [
//   {
//     id: 28,
//     name: 'Action',
//   },
//   {
//     id: 12,
//     name: 'Adventure',
//   },
//   {
//     id: 14,
//     name: 'Fantasy',
//   },
//   {
//     id: 878,
//     name: 'Science Fiction',
//   },
//   {
//     id: 53,
//     name: 'Thriller',
//   },
//   {
//     id: 10752,
//     name: 'War',
//   },
//   {
//     id: 37,
//     name: 'Western',
//   },
// ];

// films.forEach(film => {
//   const names = film.genre_ids.map(id => {
//     return genres.find(genre => genre.id === id).name;
//   });
//   //console.log(names);
//   film.genreName = names;
//   console.log(film);
// });

// const list = films.reduce((acc, film, idx) => {
//   return (
//     acc +
//     `${idx + 1} ${film.title} : ${
//       film.genreName.length < 3
//         ? film.genreName.join(', ')
//         : `${film.genreName[0]}, ${film.genreName[1]}, Others... \n `
//     } `
//   );
// }, 'film list \n');
// .
// console.log(list);
//.
//.
//.===========================================================================================================================
// ---------------------------------------------------------TASK------------------------------------------------------------//
//.
// const cars = [
//   {
//     car: 'Honda',
//     type: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//   },
//   {
//     car: 'Audi',
//     type: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//   },
//   {
//     car: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//   },
//   {
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     car: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
//   {
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     car: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
// ];

// const ulRef = document.querySelector(`.list`);
// const formRef = document.querySelector(`.form`);
// formRef.addEventListener(`submit`, searchCar);

// function cardsMarkup(cars) {
//   const markup = cars
//     .map(({ car, type, price, img }) => {
//       return `<li>
//         <img
//         src=${img}
//         width="300px"
//         />
//         <h2>${car}</h2>
//         <h3>${type}</h3>
//         <p>${price}</p>
//         </li>`;
//     })
//     .join(``);
//   ulRef.innerHTML = markup;
// }

// function searchCar(event) {
//   event.preventDefault();
//   const inputRef = event.currentTarget.elements.input.value;
//   const selectRef = event.currentTarget.elements.select.value;

//   const filteredCars = cars.filter(
//     item => item[selectRef].toLowerCase() === inputRef.toLowerCase()
//   );

//   cardsMarkup(filteredCars);

//   //   console.log(inputRef);
//   //   console.log(selectRef);
//   //   console.log(filteredCars);
// }

// cardsMarkup(cars);
//
//
// =============================================================================================================================
// ---------------------------------------------------------TASK------------------------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків
// const hogvarts = {
//   griffindor: [
//     {
//       name: 'Harry',
//       points: 17,
//     },
//     {
//       name: 'Hermiona',
//       points: 19,
//     },
//     {
//       name: 'Ron',
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: 'Draco',
//       points: 17,
//     },
//     {
//       name: 'Goyl',
//       points: 14,
//     },
//     {
//       name: 'Crabbe',
//       points: 5,
//     },
//   ],

//   studentNames(item) {
//     return item.map(student => student.name);
//   },

//   amountPoints(item) {
//     let amount = 0;
//     for (const i of item) {
//       amount += i.points;
//     }

//     return amount;
//   },

//   winner() {
//     const griffindorPoints = this.amountPoints(hogvarts.griffindor);
//     const sliserinPoints = this.amountPoints(hogvarts.sliserin);
//     if (griffindorPoints > sliserinPoints) {
//       return `griffindor is winner! Their number of points: ${griffindorPoints}`;
//     } else {
//       return `sliserin is winner! Their number of points: ${sliserinPoints}`;
//     }
//   },
// };

// console.log(`griffindor students: `, hogvarts.studentNames(hogvarts.griffindor));
// console.log(`sliserin students: `, hogvarts.studentNames(hogvarts.sliserin));

// console.log(`griffindor points: `, hogvarts.amountPoints(hogvarts.griffindor));
// console.log(`sliserin points: `, hogvarts.amountPoints(hogvarts.sliserin));

// console.log(hogvarts.winner());

//
//
// =============================================================================================================================
// ---------------------------------------------------------------TASK-----------------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Lika`,
//     language: `html`,
//   },
//   {
//     name: `Anton`,
//     language: `css`,
//   },
//   {
//     name: `Andriy`,
//     language: `js`,
//   },
//   {
//     name: `Vova`,
//     language: `html`,
//   },
//   {
//     name: `Alina`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Aleksandr`,
//     langunage: `html`,
//   },
//   {
//     name: `Taras`,
//     language: `css`,
//   },
//   {
//     name: `Ivan`,
//     language: `js`,
//   },
//   {
//     name: `Make`,
//     language: `html`,
//   },
// ];

// let newArr = [];

// function fn(array, lang) {
//   array.forEach(el => {
//     if (el.language === lang) {
//       newArr.push(el.name);
//     }
//   });
// }

// fn(students, `js`);
// console.log(newArr);
//
//
// =============================================================================================================================
// ---------------------------------------------------------------TASK------------------------------------------------------//
// // Порахувати скільки заробив кожен юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);
// const workers = [
//   {
//     name: 'Alex',
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: 'Dima',
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: 'Oleg',
//     salary: 1500,
//     month: 36,
//   },
// ];

// let yearSalary = 0;
// let result = ``;

// function salaryUsers(array, worker) {
//   array.forEach(el => {
//     if (el.name === worker) {
//       yearSalary = el.salary * el.month;
//       result = `${worker}\`s salary per year ${yearSalary}`;
//       return result;
//     }
//   });
// }

// salaryUsers(workers, `Dima`);
// console.log(result);

// let total = 0;
// let res = ``;

// function totalAmount(array) {
//   array.forEach(el => {
//     total += el.salary;
//     res = `The total amount of earnings of all employees for the month: ${total}`;
//     return res;
//   });
// }

// totalAmount(workers);
// console.log(res);
//
//
//
// =============================================================================================================================
// ---------------------------------------------------------TASK------------------------------------------------------------//
// 1 Створити функцію яка буде приймати 2 параметри
//   1 параметр масив
//   2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"
// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   {
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21,
//   },
//   {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26,
//   },
//   {
//     name: 'Alice',
//     books: ['War and peace', 'Romeo and Juliet'],
//   },
//   {
//     name: 'Oleksii',
//     books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];

// let names = [];
// let total = 0;

// function getBooks(array, book) {
//   array.forEach(el => {
//     if (el.books.includes(book)) {
//       return names.push(el.name);
//     }
//   });
// }

// function getAges(array) {
//   for (const el of array) {
//     if (el.age) {
//       total += el.age;
//     }
//   }
// }

// getBooks(friends, 'Harry Potter');
// console.log(names);

// getAges(friends);
// console.log(total);
//
//
// =============================================================================================================================
// ---------------------------------------------------------TASK------------------------------------------------------------//
// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = {
//   privat: 1000,
//   mono: 1500,

//   getSum() {
//     const card = prompt(`Введите название карты`);
//     if (this.hasOwnProperty(card)) {
//       return this[card];
//     }
//     return `Такой карты нет`;
//   },

//   addCard() {
//     const newCard = prompt(`Введите название карты`);
//     if (!this.hasOwnProperty(newCard)) {
//       this[newCard];
//       return `Карта ${newCard} успешно создана :)`;
//     }
//     return `Карта с таким названием уже существует!`;
//   },

//   takeAwaySum() {
//     const nameCard = prompt(`Введите название вашей карты`);
//     if (this.hasOwnProperty(nameCard)) {
//       const summ = prompt(`Введите сумму`);
//       if (this[nameCard] >= summ) {
//         return (this[nameCard] -= summ);
//       } else {
//         return `На вашей карте недостаточно средств!`;
//       }
//     } else {
//       return `Карты с таким названием нет!`;
//     }
//   },

//   addSum() {
//     const nameCard = prompt(`Введите название вашей карты`);
//     if (this.hasOwnProperty(nameCard)) {
//       const summ = prompt(`Введите сумму`);
//       return (this[nameCard] += +summ);
//     } else {
//       return `Карты с таким названием нет!`;
//     }
//   },
// };

// console.log(bankSystem.getSum());
// console.log(bankSystem.addCard());
// console.log(bankSystem.takeAwaySum());
// console.log(bankSystem.addSum());
//
//
// =============================================================================================================================
// ---------------------------------------------------------TASK-----------------------------------------------------------//
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Alex'],
//   },
// ]; //Not found
// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ]; // Not found
// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ]; // Jhon

// function findNarcissus(array) {
//   let noOneKnows = array.find(el => el.know.length === 0)?.name;
//   let everyoneKnows = array
//     .filter(el => el.name !== noOneKnows)
//     .every(el => el.know.includes(noOneKnows));

//   return everyoneKnows ? noOneKnows : 'Not found';
// }

// console.log(findNarcissus(people1));
// console.log(findNarcissus(people2));
// console.log(findNarcissus(people3));

//
//
// =============================================================================================================================
// ---------------------------------------------------------TASK-----------------------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)
// const products = [
//   {
//     id: 'sku1',
//     qty: 1,
//   },
//   {
//     id: 'sku2',
//     qty: 2,
//   },
//   {
//     id: 'sku3',
//     qty: 3,
//   },
//   {
//     id: 'sku1',
//     qty: 6,
//   },
//   {
//     id: 'sku1',
//     qty: 8,
//   },
//   {
//     id: 'sku2',
//     qty: 19,
//   },
//   {
//     id: 'sku4',
//     qty: 1,
//   },
// ]; // sku1: 15, sku2: 21, sku3: 3, sku4: 1

// function fn(array) {
//   let uniqEl = [];
//   array.forEach(el => {
//     let elId = uniqEl.find(e => e.id === el.id);
//     if (!elId) {
//       uniqEl.push(el);
//     } else {
//       elId.qty += el.qty;
//     }
//   });

//   return uniqEl;
// }

// console.log(fn(products));

//
//
// =============================================================================================================================
// ---------------------------------------------------------TASK-----------------------------------------------------------//
//
