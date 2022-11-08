// bearer key
// pagination

const ulRef = document.querySelector(`ul`);
const btnRef = document.querySelector(`button`);
let page = 1;

btnRef.addEventListener(`click`, onClick);

function fetchApi(page = 1) {
  const url = `https://the-one-api.dev/v2`;
  const options = {
    headers: {
      authorization: 'Bearer 3sru3q0Sisxo4TsZOe23',
    },
  };
  return fetch(`${url}/character?limit=300&page=${page}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

fetchApi()
  .then(data => {
    ulRef.insertAdjacentHTML(`beforeend`, createMarkup(data.docs));
    btnRef.hidden = false;
  })
  .catch(error => console.log(error));

function createMarkup(data) {
  return data
    .map(item => {
      return `
    <li class="item">
        <h3>Name: ${item.name}</h3>
        <h3>Race: ${item.race}</h3>
    </li>`;
    })
    .join(``);
}

function onClick() {
  page += 1;
  fetchApi(page).then(data => {
    ulRef.insertAdjacentHTML(`beforeend`, createMarkup(data.docs));
    if (data.page === data.pages) {
      btnRef.hidden = true;
    }
  });
}
