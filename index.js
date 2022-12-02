// const API_URL = "http://www.omdbapi.com/?type=love&plot=full&apikey=20216e6e";
// //const API_URL = "http://www.omdbapi.com/?s=avengers&page=1&apikey=fc1fef96";

// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//     if (this.readyState === 4 && this.status === 200) {
//         // 0 = UNSET, no se ha llamado al metodo open
//         // 1 = OPENED, se ha llamado al metodo open
//         // 2 = HEADERS_RECIVED, se esta llamadno al metodo send()
//         // 3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
//         // 4 = DONE, se ha completado la operación
//         const data = JSON.parse(this.response)
//         console.log(data)
//         // const HTMLResponse = document.querySelector("#app")

//         // const tpl = data.map((movie) => `<li>${movie.Title}</li>`);
//         // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//     }
// }

// xhr.addEventListener("load", onRequestHandler);
// xhr.open("GET", `${API_URL}`);
// xhr.send();

// // const HTMLResponse = document.querySelector("#app")


// // fetch(`${API_URL}`)
// //     .then((response) => response.json())
// //     .then(users => {
// //         const tpl = users.map((user) => `<li>${user.Title}<li>`)
// //         HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
// // });

console.log("funcionando")