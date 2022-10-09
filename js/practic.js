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

// =============================================================================================================================

const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
    name: 'Молоток',
    price: 150,
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
    name: 'Перфоратор',
    price: 3000,
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
    name: 'Рівень',
    price: 2000,
  },
];
console.log({
  name: 'NAME',
  price: 'PRICE',
});

const listProductRef = document.querySelector(`.list`);
listProductRef.addEventListener(`click`, findProductEl);

const basket = [];
const favorite = [];

function markupCards(instruments) {
  const markup = instruments
    .map(({ id, img, name, price }) => {
      return `
    <li data-id="${id}">
    <img src="${img}" width="300px">
    <h2>${name}</h2>
    <p>${price}</p>
    <button class="jsAdd">Купити</button>
    <button class="jsFavorite">Обране</button>
    </li>
    `;
    })
    .join(``);
  listProductRef.innerHTML = markup;
}

function findProductEl(event) {
  if (event.target.classList.contains(`jsAdd`)) {
    const idx = event.target.closest(`li`).dataset.id;
    const currentProduct = instruments.find(({ id }) => id === Number(idx));
    console.log(currentProduct);

    console.log(idx);
    console.log(event.target);

    basket.push(currentProduct);
    console.log(basket);
  }

  if (event.target.classList.contains(`jsFavorite`)) {
    const idx = event.target.closest(`li`).dataset.id;
    const currentProduct = instruments.find(({ id }) => id === Number(idx));

    console.log(idx);
    console.log(event.target);

    favorite.push(currentProduct);
    console.log(favorite);
  }
}

markupCards(instruments);

// Зробити так, щоб при повторному додаванні продукта в массив не сам продукт повторювався, а його кількість.
// Зробити так, щоб при натисканні кнопки зверху елемент додавався в пустий масси.
// Добавити можливість видаляти всі елементи з кошику, або зменшувати їх кількість.
