<?php

include("conexion.php");

$getmysql = new mysqlconex();
$getconex = $getmysql->conectar();

if (isset($_POST["Enviar"])){

    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $query = "INSERT INTO mensajes (nombre,email,asunto,mensaje) VALUES (?,?,?,?)";
    $sentencia = mysqli_prepare($getconex, $query);
    mysqli_stmt_bind_param($sentencia, "ssss", $nombre, $email, $asunto, $mensaje);
    mysqli_stmt_execute($sentencia);
    $afectado = mysqli_stmt_affected_rows($sentencia);

    if ($afectado==1){
        echo " <script> alert ('El mensaje se a enviado correctamente');
        location.href='../index.php';
        </script> ";
    } else {
        echo " <script> alert ('El mensaje NO a podido enviarse');
        location.href='../index.php';
        </script> ";
    }

    mysqli_stmt_close($sentencia);
    mysqli_close($getconex);
}

?>