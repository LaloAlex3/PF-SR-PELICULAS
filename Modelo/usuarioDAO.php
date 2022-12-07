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
        $actoresPeliculas = json_encode(array('actor' => $_POST['actores']));
        $directoresPeliculas = json_encode(array('director' => $_POST['directores']));

        $query = ("INSERT INTO users(nombre, nUsuario,cElectronico,contrasena,gPeliculas, actoresFavoritos, directoresFavoritos) values('$nombre','$nUsuario','$cElectronico','$contrasena','$gPeliculas', '$actoresPeliculas', '$directoresPeliculas')");

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
            $_SESSION['actoresFavoritos'] = $row['actoresFavoritos']; 
            $_SESSION['directoresFavoritos'] = $row['directoresFavoritos']; 

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
            "gPeliculas" => $_SESSION['gPeliculas'],
            "actoresFavoritos" => $_SESSION['actoresFavoritos'],
            "directoresFavoritos" => $_SESSION['directoresFavoritos']
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
        $actoresPeliculas = json_encode(array('actor' => $_POST['actores']));
        $directoresPeliculas = json_encode(array('director' => $_POST['directores']));

        $query = ("UPDATE users
        SET `nombre` = '$nombre',
        `cElectronico` = '$correo',
        `contrasena` = '$contrasena',
        `gPeliculas` = '$gPeliculas',
        `actoresFavoritos` = '$actoresPeliculas',
        `directoresFavoritos` = '$directoresPeliculas'
        WHERE idUsers = $idUsers");

        if (mysqli_query($conn, $query)) {
            echo "OK";
        } else {
            echo "Error deleting record: " . mysqli_error($conn);
        }

        $_SESSION['nombre'] = $nombre;
        $_SESSION['contrasena'] = $contrasena;
        $_SESSION['cElectronico'] = $correo;
        $_SESSION['gPeliculas'] = $gPeliculas;
        $_SESSION['actoresFavoritos'] = $actoresPeliculas;
        $_SESSION['directoresFavoritos'] = $directoresPeliculas;

        mysqli_close($conn);
    
    }
}
