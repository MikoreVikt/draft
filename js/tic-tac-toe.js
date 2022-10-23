// const contentRef = document.querySelector(`.content`);
// const btnRef = document.querySelector(`.btn`);
// const formRef = document.querySelector(`form`);
// const firstPlayerRef = document.querySelector(`.first`);
// const secondPlayerRef = document.querySelector(`.second`);

// let player = `X`;
// let firstValue = [];
// let secondValue = [];

// contentRef.insertAdjacentHTML(`beforeend`, createMurkup());
// contentRef.addEventListener(`click`, onClick);
// btnRef.addEventListener(`click`, onReset);
// formRef.addEventListener(`submit`, onSubmit);

// function createMurkup() {
//   let murkup = ``;
//   for (let i = 0; i <= 8; i += 1) {
//     murkup += `<div class="item" data-id="${i}"></div>`;
//   }
//   return murkup;
// }

// kentinGam();

// function onClick(evt) {
//   if (!evt.target.classList.contains(`item`)) {
//     return;
//   }

//   if (!evt.target.textContent) {
//     evt.target.textContent = player;

//     if (player === `X`) {
//       firstValue.push(evt.target.dataset.id);
//       localStorage.setItem(`firstPlayer`, JSON.stringify(firstValue));
//     } else {
//       secondValue.push(evt.target.dataset.id);
//       localStorage.setItem(`secondPlayer`, JSON.stringify(secondValue));
//     }

//     player = player === `X` ? `O` : `X`;
//     console.log(evt.target.dataset.id);
//   }
// }

// function onReset() {
//   contentRef.innerHTML = createMurkup();
//   player = `X`;
//   firstValue = [];
//   secondValue = [];
//   localStorage.clear();
// }

// function onSubmit(evt) {
//   evt.preventDefault();
//   const { first, second } = evt.currentTarget.elements;
//   firstPlayerRef.textContent = first.value;
//   secondPlayerRef.textContent = second.value;
//   evt.currentTarget.reset();

//   console.log(first);
//   console.log(second);
// }

// function kentinGam() {
//   const arrX = JSON.parse(localStorage.getItem(`firstPlayer`)) || [];
//   const arrO = JSON.parse(localStorage.getItem(`secondPlayer`)) || [];
//   firstValue = arrX;
//   secondValue = arrO;

//   for (const i of contentRef.children) {
//     if (arrX.includes(i.dataset.id)) {
//       i.textContent = `X`;
//     }
//     if (arrO.includes(i.dataset.id)) {
//       i.textContent = `O`;
//     }
//   }
// }
