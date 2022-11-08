const contentRef = document.querySelector(`.content`);
const btnRef = document.querySelector(`.btn`);
const formRef = document.querySelector(`form`);
const firstPlayerRef = document.querySelector(`.first`);
const secondPlayerRef = document.querySelector(`.second`);

let winIndex = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let player = localStorage.getItem('currentPlayer') || `X`;
let firstValue = [];
let secondValue = [];

contentRef.insertAdjacentHTML(`beforeend`, createMurkup());
contentRef.addEventListener(`click`, onClick);
btnRef.addEventListener(`click`, onReset);
formRef.addEventListener(`submit`, onSubmit);

function createMurkup() {
  let murkup = ``;
  for (let i = 0; i <= 8; i += 1) {
    murkup += `<div class="item" data-id="${i}"></div>`;
  }
  return murkup;
}

kentinGam();

function onClick(evt) {
  if (!evt.target.classList.contains(`item`)) {
    return;
  }

  if (!evt.target.textContent) {
    evt.target.textContent = player;

    if (player === `X`) {
      firstValue.push(+evt.target.dataset.id);
      localStorage.setItem(`firstPlayer`, JSON.stringify(firstValue));
      if (isWin(firstValue)) {
        setTimeout(() => {
          alert(`${firstPlayerRef.textContent} won!`);
          onReset();
        });
        return;
      }
    } else {
      secondValue.push(+evt.target.dataset.id);
      localStorage.setItem(`secondPlayer`, JSON.stringify(secondValue));
      if (isWin(secondValue)) {
        setTimeout(() => {
          alert(`${secondPlayerRef.textContent} won!`);
          onReset();
        });
        return;
      }
    }

    player = player === `X` ? `O` : `X`;
    localStorage.setItem('currentPlayer', player);
  }
}

function onReset() {
  contentRef.innerHTML = createMurkup();
  player = `X`;
  firstValue = [];
  secondValue = [];
  firstPlayerRef.textContent = ``;
  secondPlayerRef.textContent = ``;
  localStorage.clear();
}

function onSubmit(evt) {
  evt.preventDefault();
  const { first, second } = evt.currentTarget.elements;
  firstPlayerRef.textContent = first.value;
  secondPlayerRef.textContent = second.value;
  evt.currentTarget.reset();
}

function kentinGam() {
  const arrX = JSON.parse(localStorage.getItem(`firstPlayer`)) || [];
  const arrO = JSON.parse(localStorage.getItem(`secondPlayer`)) || [];
  firstValue = arrX;
  secondValue = arrO;

  for (const i of contentRef.children) {
    if (arrX.includes(i.dataset.id)) {
      i.textContent = `X`;
    }
    if (arrO.includes(i.dataset.id)) {
      i.textContent = `O`;
    }
  }
}

function isWin(arr) {
  return winIndex.some(item => item.every(idx => arr.includes(idx)));
}
