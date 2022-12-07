async function datosUsuario() {
  let response = await fetch("../../Controlador/mDatosUsuario.php");
  if (response.ok) {
    var datos = await response.text();
    var data = JSON.parse(datos);
    //   console.log(data);
    return data;
  }
}

let datosFormulario = document.querySelector("#contenedorFormulario");

function mostrarDatos(data) {
  data.forEach((user) => {
    datosFormulario.querySelector(".nombre").setAttribute("value", user.nombre);
    datosFormulario
      .querySelector(".nUsuario")
      .setAttribute("value", user.nUsuario);
    datosFormulario
      .querySelector(".cElectronico")
      .setAttribute("value", user.cElectronico);
    datosFormulario
      .querySelector(".contrasena")
      .setAttribute("value", user.contrasena);
  });
}

function recuperaDatosUsuario() {
  datosUsuario()
    .then((data) => mostrarDatos(data))
    .catch(function (err) {
      console.log(err);
    });
}

recuperaDatosUsuario();

/// ***** Aquí terminamos de llenar el Form de Usuario *******

// ******* Consumo de API ********

// const API_URL = "http://www.omdbapi.com/?apikey=20216e6e&t=movie";
const API_URL = "http://www.omdbapi.com/?apikey=20216e6e";

let i = "";
let movieId = "&i=tt0106";
let genero = [];
let actor = [];
let directores = [];

//Para recorrer nuestra API utilizamos un for y a través del ID obtenemos 200 peliculas
for (i = 600; i < 800; i++) {
  fetch(API_URL + movieId + i)
    .then((response) => response.json())
    .then((data) => {
      let { Genre: genre, Actors: actors, Director: director } = data;

      //Sacamos los Generos
      genre?.split(", ").forEach((item) => {
        if (!genero.includes(item)) {
          genero.push(item);
        }
      });

      // Sacamos los Actores
      actors?.split(", ").forEach((item) => {
        if (!actor.includes(item)) {
          actor.push(item);
        }
      });

      // Sacamos los Directores
      director?.split(", ").forEach((item) => {
        if (!directores.includes(item)) {
          directores.push(item);
        }
      });

      // Llamamos a nuestras Funciones
      pintarSelect(genero);
      pintarSelectActores(actor);
      pintarSelectDirectores(directores);
    });
}

//Seleccionamos el Select Generos
let generosPeliculas = document.querySelector("#generosPeliculas");
//Pintamos nuestro Select con Ayuda de un template
const pintarSelect = (genero) => {
  let template = "<option>Selecciona tus generos favoritos...</option>";

  genero.forEach((gen) => {
    template += `<option value="${gen}">${gen}</option>`;
  });

  generosPeliculas.innerHTML = template;
};

//////////////////////////////////////////////////////////////////

//Seleccionamos el Select Actores
let actoresPeliculas = document.querySelector("#actoresPeliculas");
//Pintamos nuestro Select con Ayuda de un template
const pintarSelectActores = (actor) => {
  let template = "<option>Selecciona tus actores favoritos...</option>";

  actor.forEach((act) => {
    template += `<option value="${act}">${act}</option>`;
  });

  actoresPeliculas.innerHTML = template;
};

///////////////////////////////////////////////////////////////////////

//Seleccionamos el Select Directores
let directoresPeliculas = document.querySelector("#directoresPeliculas");
//Pintamos nuestro Select con Ayuda de un template
const pintarSelectDirectores = (director) => {
  let template = "<option>Selecciona tus directores favoritos...</option>";

  director.forEach((direct) => {
    template += `<option value="${direct}">${direct}</option>`;
  });

  directoresPeliculas.innerHTML = template;
};

// ******* Aquí Termina el Consumo de API ********

// ******* Update Form ********

const form = document.querySelector("#formularioAdminUsuario");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let datos = new FormData(formularioAdminUsuario);

  fetch("../../Controlador/actualizarInfo.php", {
    method: "POST",
    body: datos, //Cuerpo del mensaje
  })
    .then((res) => res.text())
    .then((data) => {
      if (data == "OKnull") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Actualización Éxitosa",
          showConfirmButton: true,
          background: "#75b900ab",
          color: "#eee",
          timer: 3000,
        });
        formulario.reset();
      } else {
        alert("Ocurrio un Error");
      }
    });
});
