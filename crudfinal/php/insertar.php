<?php

include("conexion.php");

$getmysql = new mysqlconex();
$getconex = $getmysql->conectar();

if (isset($_POST["registrar"])){

    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $repo = $_POST["repo"];
    $demo = $_POST["demo"];
    $img = $_POST["img"];

    $query = "INSERT INTO proyectos (nombre,descripcion,repositorio,demo,img) VALUES (?,?,?,?,?)";
    $sentencia = mysqli_prepare($getconex, $query);
    mysqli_stmt_bind_param($sentencia, "sssss", $nombre, $descripcion, $repo, $demo, $img);
    mysqli_stmt_execute($sentencia);
    $afectado = mysqli_stmt_affected_rows($sentencia);

    if ($afectado==1){
        echo " <script> alert ('El proyecto [$nombre] se ha guardado correctamente');
        location.href='../index.php';
        </script> ";
    } else {
        echo " <script> alert ('El proyecto [$nombre] NO se ha guardado correctamente');
        location.href='../index.php';
        </script> ";
    }

    mysqli_stmt_close($sentencia);
    mysqli_close($getconex);
}

?>