<?php
include "../Modelo/conexion.php";
include "../Modelo/usuarioDAO.php";


if (isset($_POST)) {
    $dDAO = new usuarioDAO($conn);

    $metodo = $dDAO->updateData();

    echo json_encode($metodo, JSON_UNESCAPED_UNICODE);
}