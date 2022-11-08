const formRef = document.querySelector(`form`);
const ulRef = document.querySelector(`ul`);

formRef.addEventListener(`submit`, onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const value = evt.currentTarget.elements.query.value;
  fetchApi(value)
    .then(data => {
      createMarkup(data.forecast.forecastday);
    })
    .catch(error => console.log(error));
}

function fetchApi(name) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=9653f939f00349d089a123214220611&q=${name}&days=7`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

function createMarkup(data) {
  ulRef.innerHTML = data
    .map(item => {
      return `<li>
      <img src="${item.day.condition.icon}" alt="${item.day.condition.text}">
      <p>${item.day.condition.text}</p>
        <p>День: ${item.date}</p>
        <p>Средняя температура &#8451
: ${item.day.avgtemp_c}</p>
    </li>`;
    })
    .join('');
}
