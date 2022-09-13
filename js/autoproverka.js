// Потрібно створити 4 методи об'єкту
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
// ==========================================================================================================================
