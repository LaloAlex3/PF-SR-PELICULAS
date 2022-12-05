let API_KEY2 = "apikey=20216e6e";
let plot2 = "&plot=full";

//Primera función del buscador de peliculas
function buscarPeliculas() {
  let inputSearch = document.querySelector("#inputSearch").value;
  console.log(inputSearch);
  let API_URL = `?${API_KEY2}&type=${inputSearch}${plot2}`;
  window.location.href = `../Movie_Search/movieResult.html${API_URL}`;
}

let inputSearch = document.querySelector("#inputSearch");
//Ingresamos el evento en el Input
inputSearch.addEventListener("search", function (e) {
  e.preventDefault();
  buscarPeliculas();
});

let buscar = document.querySelector("#search");
//Ingresamos el evento en el Button
buscar.addEventListener("click", function (e) {
  e.preventDefault();
  buscarPeliculas();
});
