console.log("funcionando 😍");

let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault()

    //Nueva información de Formulario de este formulario
    let datos = new FormData(formulario)

    fetch("../Controlador/registrarUsuario.php", {
        method: "POST",
        body: datos //Cuerpo del mensaje
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
})