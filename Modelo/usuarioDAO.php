<?php

class usuarioDAO
{

    public $conexion;


    public function __construct($conexion)
    {

        $this->conexion = $conexion;
    }

    public function __destruct()
    {
    }

    public function insertaUsuario()
    {
        include "conexion.php";

        $nombre = $_POST["nombre"];
        $nUsuario = $_POST["nUsuario"];
        $cElectronico = $_POST["correo"];
        $contrasena = $_POST["contrasena"];
        $gPeliculas = json_encode(array('genero' => $_POST['preferencias']));

        $query = ("INSERT INTO users(nombre, nUsuario,cElectronico,contrasena,gPeliculas) values('$nombre','$nUsuario','$cElectronico','$contrasena','$gPeliculas')");

        if (mysqli_query($conn, $query)) {
            echo "OK";
        } else {
            echo "Error deleting record: " . mysqli_error($conn);
        }

        mysqli_close($conn);
    }
}
