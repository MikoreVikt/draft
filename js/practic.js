// const instruments = [
//   {
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
//     name: 'Молоток',
//     price: 150,
//   },
//   {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
//     name: 'Перфоратор',
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
//     name: 'Рівень',
//     price: 2000,
//   },
// ];
// console.log({
//   name: 'NAME',
//   price: 'PRICE',
// });

// const listProductRef = document.querySelector(`.list`);
// listProductRef.addEventListener(`click`, findProductEl);

// const basket = [];
// const favorite = [];

// function markupCards(instruments) {
//   const markup = instruments
//     .map(({ id, img, name, price }) => {
//       return `
//     <li data-id="${id}">
//     <img src="${img}" width="300px">
//     <h2>${name}</h2>
//     <p>${price}</p>
//     <button class="jsAdd">Купити</button>
//     <button class="jsFavorite">Обране</button>
//     </li>
//     `;
//     })
//     .join(``);
//   listProductRef.innerHTML = markup;
// }

// function findProductEl(event) {
//   if (event.target.classList.contains(`jsAdd`)) {
//     const idx = event.target.closest(`li`).dataset.id;
//     const currentProduct = instruments.find(({ id }) => id === Number(idx));
//     console.log(currentProduct);

//     console.log(idx);
//     console.log(event.target);

//     basket.push(currentProduct);
//     console.log(basket);
//   }

//   if (event.target.classList.contains(`jsFavorite`)) {
//     const idx = event.target.closest(`li`).dataset.id;
//     const currentProduct = instruments.find(({ id }) => id === Number(idx));

//     console.log(idx);
//     console.log(event.target);

//     favorite.push(currentProduct);
//     console.log(favorite);
//   }
// }

// markupCards(instruments);

// Зробити так, щоб при повторному додаванні продукта в массив не сам продукт повторювався, а його кількість.
// Зробити так, щоб при натисканні кнопки зверху елемент додавався в пустий масси.
// Добавити можливість видаляти всі елементи з кошику, або зменшувати їх кількість.
//
//
// ===============================================================================================================
//
//
