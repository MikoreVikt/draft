//// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

const bankSystem = {
  privat: 1000,
  mono: 1500,

  getSumm() {
    const card = prompt();
    if (this.hasOwnProperty(card)) {
      return this[card];
    }
    return `Карты с таким названием нет`;
  },

  addCard() {
    const newCard = prompt();
    if (!bankSystem.hasOwnProperty(newCard)) {
      this[newCard] = 0;
      return `Карта успешно создана`;
    }
    return `Такая карта уже существует`;
  },

  withdraw() {
    const nameCard = prompt(`Enter card name`);

    if (this.hasOwnProperty(nameCard)) {
      const summ = prompt(`Enter your summ`);
      if (this[nameCard] >= summ) {
        return (this[nameCard] -= summ);
      } else {
        return `Суммы на карте не достаточно`;
      }
    } else {
      return `Такой карты нет`;
    }
  },

  replenishment() {
    const nameCard = prompt(`Enter card name`);
    if (this.hasOwnProperty(nameCard)) {
      const summ = prompt(`Enter your summ`);
      return (this[nameCard] += +summ);
    }
    return `Такой карты нет`;
  },
};

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

const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
const mens = ['Artem', 'Maksim', 'David', 'Roman'];

function sortUsres(users, mens) {
  const women = [];
  console.log(users);

  for (const user of users) {
    if (!mens.includes(user)) {
      //   console.log(user);
      women.push(user);
    }
  }
  //   console.log(womans);
  return women;
}

// console.log(sortUsres(users, mens));

// 1. Создать пустой массив вуменс
// 2. Перебрать массив юзерс с помощью фор оф
// 3. Проверить через инклюдс вхождение поточного имени в массив менс
// 4. Если поточное имя не входит в массив менс, пушить его в масси вуменс
// 5. возвращаем массив вуменс с помощью ретерн

// =========================================================================================
// -----------------------------------------TASK 7------------------------------------------//
// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
// const names = ['Anna', 3, 'Roma', 17, 'Kate', 14, 'Oleg'];

// =========================================================================================
// -----------------------------------------TASK 8------------------------------------------//
// Потрібно створити світлофор за допомогою switch()
// Користувач вводить в prompt() колір який він бачить
// В результаті отримує меседж з дією яку повинен виконати
// Світлофор може мати 4 стани green (GO), yellow (READY),red (STOP), будь що інше означає що сфітлофор не працює (BE CAREFUL)

// ==========================================================================================
// -----------------------------------------TASK 9------------------------------------------//
//Створіть функцію, яка приймає 1 параметр
//1 масив імен користувачів, які поставили лайки.
//Функція повертає меседж, як вказано у прикладах:
//Використовувати switch()

// function stringBuilder(users){}

// stringBuilder([])//"no one likes this";
// stringBuilder(["Peter"])//"Peter likes this";
// stringBuilder(["Jacob", "Alex"])//"Jacob and Alex like this";
// stringBuilder(["Max", "John", "Mark"])//"Max, John and Mark like this";
// stringBuilder(["Alex", "Jacob", "Mark", "Max"])//"Alex, Jacob and 2 others like this;

// =========================================================================================
// -----------------------------------------TASK 10-----------------------------------------//
// Cтворити функцію яка буде приймати 1 параметр та знаходити в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// 1 масив чисел (arr)

// const numbers = [1, 2, 3, 2, 1, 17, 19]

// function getCommonElements(arr){};
// getCommonElements(numbers)
