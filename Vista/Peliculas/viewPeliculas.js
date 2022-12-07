// const API_URL = "http://www.omdbapi.com/?apikey=20216e6e";
const API_URL = "http://www.omdbapi.com/?apikey=b661705f";

let i = "";
let movieId = "&i=tt0106";
let arrayPeliculas = [];

for (i = 600; i < 800; i++) {
  fetch(API_URL + movieId + i)
    .then((response) => response.json())
    .then((data) => {
      if (data.Type == "movie") {
        //   console.log(data.Poster);
        if (
          data.Poster != "N/A" &&
          data.Poster !=
            "https://m.media-amazon.com/images/M/MV5BMTU3MTIxMDM2N15BMl5BanBnXkFtZTcwOTMwOTgxMQ@@._V1_SX300.jpg"
        ) {
          arrayPeliculas.push(data);
        }
      }
      pintarPeliculas(arrayPeliculas);
    });
}

let peliculas = document.querySelector("#peliculasAPI");

const pintarPeliculas = (dataPeliculas) => {
  let template = ""

  dataPeliculas.forEach((pelicula) => {

    template += `
        <div class="col pt-4">
            <a href="../Movie_Search/movieDetail.html?type=${pelicula.imdbID}&apikey=b661705f&plot=full">
                <img
                  src="${pelicula.Poster}"
                  class="card-img-top"
                  alt="..."
                />
            </a>
          </div>
      `;
  });

  peliculas.innerHTML = template;
};
