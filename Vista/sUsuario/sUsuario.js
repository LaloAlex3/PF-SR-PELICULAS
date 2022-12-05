
/// ****Inicio de Sesión ********

function sesionIniciada() {
  fetch("../../Controlador/validacion.php")
    .then((response) => response.text())
    .then((response) => {
      // console.log(response);
      if (response == "error") {
        location.reload();
        window.location.href = "../../index.html";
      }
      setInterval("actualizarSesion()", 1500000); //El admin tiene una sesion de 15 min
    });
}
function actualizarSesion() {
  cerrarSesion();
  location.reload();
}

function cerrarSesion() {
  fetch("../../Controlador/logout.php")
    .then((response) => response.text())
    .then((response) => {
      //console.log(response);
      location.reload();
      window.location.href = "../../index.html";
    });
}

/// **** Fin ********


