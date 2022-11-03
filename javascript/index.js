// console.log('Hello from index.js')

// Get the searchbox and the ul where we insert the results
const searchbox = document.getElementById('search');
const list = document.querySelector('.matches');

// testing the fetch
const endpoint = '../assets/it.json';
// fetch(endpoint)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(element => { console.log(element) })
//   });

// Add the event listener on the search box

// function to put commas after thousands
function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
  return x;
}
// event listener on the keyboard when typing and injecting the result on the html
searchbox.addEventListener('keyup', e => {
  list.innerHTML = "";
  if (e.currentTarget.value === "") {
    return;
  }
  const re = new RegExp(e.currentTarget.value, 'ig');
  fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      if(element.city.match(re) || element.admin_name.match(re)) {
        list.insertAdjacentHTML(
          'beforeend',
          `<li><span class="city-name">${element.city.match(re) ? "<mark>" + element.city + "</mark>" : element.city}, </span><span class="state-name">${element.admin_name.match(re) ? "<mark>" + element.admin_name + "</mark>" : element.admin_name}</span><span class="population">${numberWithCommas(element.population)}</span></li>`
        )
      }
    })
  })
});
