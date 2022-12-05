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

    public function login()
    {
        include "conexion.php";

        session_start();


        $nUsuario = $_POST['correo'];
        $contrasena = $_POST['contrasena'];

        $query = ("SELECT * FROM users WHERE cElectronico='$nUsuario' AND contrasena = '$contrasena'");

        $queryResult = mysqli_query($conn, $query);

        if ($row = $queryResult->fetch_assoc()) {

            $_SESSION['login'] = true;
            $_SESSION['idUsers'] = $row['idUsers'];
            $_SESSION['nombre'] = $row['nombre'];
            $_SESSION['nUsuario'] = $row['nUsuario']; 
            $_SESSION['cElectronico'] = $row['cElectronico']; 
            $_SESSION['contrasena'] = $row['contrasena']; 
            $_SESSION['gPeliculas'] = $row['gPeliculas']; 

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

    public function sesion()
    {

        session_start();

        $json[] = array(
            "idUsers" => $_SESSION['idUsers'],
            "nombre" => $_SESSION['nombre'],
            "nUsuario" => $_SESSION['nUsuario'],
            "cElectronico" => $_SESSION['cElectronico'],
            "contrasena" => $_SESSION['contrasena'],
            "gPeliculas" => $_SESSION['gPeliculas']
        );

        return $json;
    }

    public function updateData()
    {

        session_start();

        include "conexion.php";

        $idUsers = $_SESSION['idUsers'];
        $nombre = $_POST["nombre"];
        $correo = $_POST["correo"];
        $contrasena = $_POST["contrasena"];
        $gPeliculas = json_encode(array('genero' => $_POST['preferencias']));

        $query = ("UPDATE users
        SET `nombre` = '$nombre',
        `cElectronico` = '$correo',
        `contrasena` = '$contrasena',
        `gPeliculas` = '$gPeliculas'
        WHERE idUsers = $idUsers");

        if (mysqli_query($conn, $query)) {
            echo "OK";
        } else {
            echo "Error deleting record: " . mysqli_error($conn);
        }

        $_SESSION['nombre'] = $nombre;
        $_SESSION['contrasena'] = $contrasena;
        $_SESSION['cElectronico'] = $correo;

        mysqli_close($conn);
    
    }
}
