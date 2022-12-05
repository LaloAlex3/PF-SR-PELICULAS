const params = window.location.search;
const urlParams = new URLSearchParams(params);
console.log(urlParams);

// Nos traemos los valores del JSON "urlParams"
const type = urlParams.get("type");
const plot = urlParams.get("plot");
const apikey = urlParams.get("apikey");

//Seleccionamos los contenedores donde pintaremos nuestra información
let movieResults = document.querySelector("#movieResults");
let movies = document.querySelector(".movies");

//Creamos la plantilla de la nuevaURL
const templates = `?s=${type}&apikey=${apikey}&plot=full`;
const API_URL = `http://www.omdbapi.com/${templates}`;


fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.Search.forEach((element) => {
      var params = `?type=${element.imdbID}&apikey=${apikey}&plot=${plot}`;

      let template = ` 

          <div class="col pt-4">
            <a href="movieDetail.html${params}">
                <img
                  src="${element.Poster}"
                  class="card-img-top"
                  alt="..."
                />
            </a>
          </div>
        `;

      let template2 = `
      <li>
        <div class="titleMovie">
            <a href="movieDetail.html${params}">${element.Title}</a>
        </div>
      </li>
        `;

        movies.innerHTML += template2;
        movieResults.innerHTML += template;
    });
  });
