<?php
include "../Modelo/conexion.php";
include "../Modelo/usuarioDAO.php";



$dDAO = new usuarioDAO($conn); //Instanciamos la clase

$metodo = $dDAO->sesion();

echo json_encode($metodo, JSON_UNESCAPED_UNICODE);
