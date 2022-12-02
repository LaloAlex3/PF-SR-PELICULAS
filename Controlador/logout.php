<?php
include "../Modelo/conexion.php";
include "../Modelo/usuarioDAO.php";

//Hacemos la inserción


if (isset($_POST)) {
    $dDAO = new usuarioDAO($conn);

    $metodo = $dDAO->logout();

}
