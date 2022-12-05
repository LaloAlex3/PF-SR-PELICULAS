
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
  let template =
    '<option>Selecciona tus generos favoritos...</option>';

  genero.forEach((gen) => {
    template += `<option value="${gen}">${gen}</option>`;
  });

  generosPeliculas.innerHTML = template;
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
