
<?php

    include("conexion.php");
    $getmysql = new mysqlconex();
    $getconex = $getmysql->conectar();

    if (isset($_POST["eliminar"])){
        
        $id = $_POST["id"];
        $nombre = $_POST["nombre"];

        $query = "DELETE FROM proyectos WHERE id=?";
        $sentencia = mysqli_prepare($getconex, $query);
        mysqli_stmt_bind_param($sentencia, "i", $id);
        mysqli_stmt_execute($sentencia);
        $afectado = mysqli_stmt_affected_rows($sentencia);

        if ($afectado==1){
            echo " <script> alert ('El proyecto [$nombre] se ha eliminado correctamente');
            location.href='../index.php';
            </script> ";
        } else {
            echo " <script> alert ('El proyecto [$nombre] NO se ha eliminado correctamente');
            location.href='../index.php';
            </script> ";
        }

        mysqli_stmt_close($sentencia);
        mysqli_close($getconex);

    }

?>