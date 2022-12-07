// const API_URL = "http://www.omdbapi.com/?apikey=20216e6e";
const API_URL = "http://www.omdbapi.com/?apikey=b661705f";

let i = "";
let movieId = "&i=tt0106";
let arraySeries = [];

for (i = 600; i < 800; i++) {
  fetch(API_URL + movieId + i)
    .then((response) => response.json())
    .then((data) => {
      if (data.Type == "series" || data.Type == "episode") {
        //   console.log(data.Poster);
        if (data.Poster != "N/A") {
          arraySeries.push(data);
        }
      }
      pintarSeries(arraySeries);
    });
}

let series = document.querySelector("#seriesAPI");

const pintarSeries = (dataSeries) => {
  let template = "";

  dataSeries.forEach((serie) => {

    template += `
        <div class="col pt-4">
            <a href="../Movie_Search/movieDetail.html?type=${serie.imdbID}&apikey=b661705f&plot=full">
                <img
                  src="${serie.Poster}"
                  class="card-img-top"
                  alt="..."
                />
            </a>
          </div>
      `;
  });

  series.innerHTML = template;
};
