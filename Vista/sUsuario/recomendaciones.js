let dataGeneros = [];
let dataActores = [];
let dataDirectores = [];
let arrayGenero = [];
let arrayActor = [];
let arrayDirector = [];

const API_URL = "http://www.omdbapi.com/?apikey=b661705f";

let i = "";
let movieId = "&i=tt0106";
let arrayPeliculas = [];

fetch("../../Controlador/mDatosUsuario.php")
  .then((response) => response.json())
  .then((data) => {
    let res = data[0].gPeliculas;
    const myJSON = JSON.parse(res);
    let array = myJSON.genero;

    let res2 = data[0].actoresFavoritos;
    const myJSON2 = JSON.parse(res2);
    let array2 = myJSON2.actor;
    // console.log(array2);

    let res3 = data[0].directoresFavoritos;
    const myJSON3 = JSON.parse(res3);
    let array3 = myJSON3.director;
    // console.log(array3)

    for (i = 600; i < 800; i++) {

      fetch(API_URL + movieId + i)
        .then((response) => response.json())
        .then((data2) => {

          let { Genre: genre, Actors: actors, Director: director } = data2;

          //Sacamos los Generos
          genre?.split(", ").forEach((item) => {
            if (!arrayGenero.includes(item)) {
              arrayGenero.push(item);
            }
          });
          //Sacamos los Actores
          actors?.split(", ").forEach((item) => {
            if (!arrayActor.includes(item)) {
              arrayActor.push(item);
            }
          });

          //Sacamos los Directores
          director?.split(", ").forEach((item) => {
            if (!arrayDirector.includes(item)) {
              arrayDirector.push(item);
            }
          });

          arrayGenero.forEach((item) => {
            if (array.includes(item)) {
              if (
                data2.Poster != "N/A" &&
                data2.Poster !=
                "https://m.media-amazon.com/images/M/MV5BMTU3MTIxMDM2N15BMl5BanBnXkFtZTcwOTMwOTgxMQ@@._V1_SX300.jpg" &&
                !dataGeneros.includes(data2)
              ) {
                dataGeneros.push(data2);
              }
            }
          })

          // console.log(dataGeneros)

          arrayActor.forEach((item) => {
            if (array2.includes(item)) {
              if (
                data2.Poster != "N/A" &&
                data2.Poster !=
                  "https://m.media-amazon.com/images/M/MV5BMTU3MTIxMDM2N15BMl5BanBnXkFtZTcwOTMwOTgxMQ@@._V1_SX300.jpg" &&
                !dataActores.includes(data2)
              ) {
                dataActores.push(data2);
              }
            }
          })

          arrayDirector.forEach((item) => {
            if (array3.includes(item)) {
              if (
                data2.Poster != "N/A" &&
                data2.Poster !=
                "https://m.media-amazon.com/images/M/MV5BMTU3MTIxMDM2N15BMl5BanBnXkFtZTcwOTMwOTgxMQ@@._V1_SX300.jpg" &&
                !dataDirectores.includes(data2)
              ) {
                dataDirectores.push(data2);
              }
            }
          })

          // console.log(dataDirectores)
          
          peliculasRecomendadas(dataGeneros);
          actoresRecomendados(dataActores);
          directoresRecomendados(dataDirectores);
          
          arrayGenero = [];
          arrayActor = [];
          arrayDirector = []
        });
      
    }
  });

// *******************************************************************

//Peliculas Recomendadas
let peliculas = document.querySelector("#peliculasAPIRecomendadas");

const peliculasRecomendadas = (dataPeliculas) => {
  let template = "";

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

// *******************************************************************

//Actores Recomendados
let actores = document.querySelector("#actoresAPIRecomendados");

const actoresRecomendados = (dataActores) => {
  let template = "";

  dataActores.forEach((act) => {
    template += `
        <div class="col pt-4">
            <a href="../Movie_Search/movieDetail.html?type=${act.imdbID}&apikey=b661705f&plot=full">
                <img
                  src="${act.Poster}"
                  class="card-img-top"
                  alt="..."
                />
            </a>
          </div>
      `;
  });

  actores.innerHTML = template;
};

// *******************************************************************

//Directores Recomendados
let directores = document.querySelector("#directoresAPIRecomendados");

const directoresRecomendados = (dataDirectores) => {
  let template = "";

  dataDirectores.forEach((dir) => {
    template += `
        <div class="col pt-4">
            <a href="../Movie_Search/movieDetail.html?type=${dir.imdbID}&apikey=b661705f&plot=full">
                <img
                  src="${dir.Poster}"
                  class="card-img-top"
                  alt="..."
                />
            </a>
          </div>
      `;
  });

  directores.innerHTML = template;
};
