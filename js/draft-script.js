// .
// .
// .
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
// .
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
// .
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
// .
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
//.
