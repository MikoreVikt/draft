// Аналог loading="lazy"

// const imgEl = document.querySelector(`img`);
// console.log(imgEl);

// const instance = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     console.log(entry);
//     observer.disconnect();
//   });
// });

// instance.observe(imgEl);

// console.log(instance);
// ================================================================

// if (!!window.IntersectionObserver) {
//   const observer = new IntersectionObserver(onObserve, { rootMargin: '0px 0px -200px 0px' });
//   document.querySelectorAll(`img`).forEach(img => {
//     observer.observe(img);
//   });
// }

// function onObserve(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       observer.unobserve(entry.target);
//     }
//   });
// }
