let getEl = selector => document.querySelector(selector);
let pagesCount = 1;

function getData() {
  const url = `https://rickandmortyapi.com/api`;
  return fetch(`${url}/character/?page=${pagesCount}`)
    .then(responce => {
      if (!responce.ok) {
        throw new Error(responce.status);
      }
      return responce.json();
    })
    .then(data => {
      const markup = data.results
        .map(
          ({ image, id, name, species, gender, status, location }) => `
    <li class="rick-and-morty_item">
        <img src="${image}" alt="">
        <p>ID: ${id}</p>
        <p>SPECIES: ${species}</p>
        <p>GENDER: ${gender}</p>
        <p>NAME: ${name}</p>
        <p>STATUS: ${status}</p>
        <p>LOCATION: ${location.name}</p>
    </li>`
        )
        .join(``);

      getEl(`.rick-and-morty_list`).insertAdjacentHTML(`beforeend`, markup);
      pagesCount += 1;
    })
    .catch(error => console.log(error));
}

getEl(`.rick-and-morty_btn`).addEventListener(`click`, getData);

window.addEventListener(`scroll`, () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  //   console.log(scrollTop);
  //   console.log(Math.round(scrollTop));
  //   console.log(scrollHeight);
  //   console.log(clientHeight);
  //   console.log(scrollHeight - clientHeight);

  if (Math.round(scrollTop) === scrollHeight - clientHeight) {
    console.log(`Loading...`);
    getData();
  }
});
