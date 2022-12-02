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

    public function login(){
        include "conexion.php";

        session_start();

        $user = $_POST['correo'];
        $contrasena = $_POST['contrasena'];

        $query = ("SELECT * FROM users WHERE cElectronico='$user' AND contrasena = '$contrasena'");

        $queryResult = mysqli_query($conn, $query);

        if ($row = $queryResult->fetch_assoc()) {

            $_SESSION['login'] = true;
            $_SESSION['user'] = $row['nUsuario'];
            $_SESSION['gustos'] = $row['gPeliculas'];
            
            echo "1";
        } else {
            echo "0";
        }
        
    }

    public function logout()
    {
        session_start();

        session_unset();
        session_destroy();
    }
}
