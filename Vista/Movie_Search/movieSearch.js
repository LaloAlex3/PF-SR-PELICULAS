// let API_KEY = "apikey=20216e6e"; // Erick
// let API_KEY = "apikey=b661705f"; // Lalo
let API_KEY = "apikey=eb053b5d"; // Otro
let plot = "&plot=full";

//Primera función del buscador de peliculas
function buscarPeliculas() {
  let inputSearch = document.querySelector("#inputSearch").value;
  console.log(inputSearch);
  let API_URL = `?${API_KEY}&type=${inputSearch}${plot}`;
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
