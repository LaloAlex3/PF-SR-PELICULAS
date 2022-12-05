// console.log("funcionando 😍");

let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Nueva información de Formulario de este formulario
  let datos = new FormData(formulario);

  fetch("../../Controlador/registrarUsuario.php", {
    method: "POST",
    body: datos, //Cuerpo del mensaje
  })
    // console.log(datos)
    .then((res) => res.text()) //registrarUsuario.php nos responde en formato JSON
    .then((data) => {
      console.log(data);
      if (data == "OKnull") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registro Éxitoso",
          showConfirmButton: true,
          background: "#75b900ab",
          color: "#eee",
          timer: 3000,
        });
        formulario.reset(); //Si el envío es exitoso limpia los datos de nuestro FORM
      } else {
        // Swal.fire({
        //   position: "center",
        //   icon: "Success",
        //   title: "Actualización Éxitosa",
        //   showConfirmButton: true,
        //   background: "#75b900ab",
        //   color: "#eee",
        //   timer: 3000,
        // });
        alert("El registro no fue exitoso");
      }
    });
});

// ******* Consumo de API ********

const API_URL = "http://www.omdbapi.com/?apikey=20216e6e";

let i = "";
let movieId = "&i=tt0106";
let genero = [];
let arr = [];

for (i = 600; i < 800; i++) {
  fetch(API_URL + movieId + i)
    .then((response) => response.json())
    .then((data) => {
      let { Genre: genre } = data;

      genre?.split(", ").forEach((item) => {
        if (!genero.includes(item)) {
          genero.push(item);
        }
      });
      pintarSelect(genero);
    });
}

let generosPeliculas = document.querySelector("#generosPeliculas");

const pintarSelect = (genero) => {
  let template = "<option>Selecciona tus generos favoritos...</option>";

  genero.forEach((gen) => {
    template += `<option value="${gen}">${gen}</option>`;
  });

  generosPeliculas.innerHTML = template;
};