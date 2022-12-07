const params = window.location.search;
const urlParams = new URLSearchParams(params);
console.log(urlParams);

// Nos traemos los valores del JSON "urlParams"
const type = urlParams.get("type");
const plot = urlParams.get("plot");
const apikey = urlParams.get("apikey");

//Seleccionamos los contenedores donde pintaremos nuestra información
let containerMovieDetail = document.querySelector("#containerMovieDetail");

const templates = `?i=${type}&apikey=${apikey}&plot=${plot}`;
const API_URL = `http://www.omdbapi.com/${templates}`;

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // let template = `<img src="${data.Poster}"></img><br>`;

    let template = `
    <div class="imageDetail">
        <img src="${data.Poster}" alt="" />
     </div>
    <!-- Detalles de la Pelicula -->
    <div id="movieDetail">
        <h1 class="titleMovie">${data.Title}</h1>
        <div class="year">
            <p>Year: ${data.Year}</p>
            <p class="rated">Ratings: <b>${data.Rated}</b></p>
            <p>Released: ${data.Released}</p>
        </div>
        <div class="genre">
            <p><b>Genre: </b>${data.Genre}</p>
        </div>
        <div class="writer">
            <p><b>Director: </b>${data.Director}</p>
            <p><b>Actors: </b>${data.Actors}</p>
        </div>
        <div class="plot">
            <p><b>Plot: </b>${data.Plot}</p>
        </div>
        <div class="language">
            <p><b>Language: </b>${data.Language}</p>
        </div>
        <div class="nominated">
            <p><i class="fa-solid fa-medal"></i> ${data.Awards}</p>
        </div>
    </div>
    `;

    containerMovieDetail.innerHTML += template;
  });
