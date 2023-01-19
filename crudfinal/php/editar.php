<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php

include("conexion.php");
$getmysql = new mysqlconex();
$getconex = $getmysql->conectar();
$id = $_POST["id"];
$nombre = $_POST["nombre"];
$descripcion = $_POST["descripcion"];
$repo = $_POST["repo"];
$demo = $_POST["demo"];
$img = $_POST["img"];

if (isset($_POST["guardar"])){
        

    $query = "UPDATE proyectos SET nombre=?, descripcion=?, repositorio=?, demo=?, img=? WHERE id=?";
    $sentencia = mysqli_prepare($getconex, $query);
    mysqli_stmt_bind_param($sentencia, "ssssss", $nombre, $descripcion, $repo, $demo, $img, $id);
    mysqli_stmt_execute($sentencia);
    $afectado = mysqli_stmt_affected_rows($sentencia);

    if ($afectado==1){
        echo " <script> alert ('El proyecto [$nombre] se ha modificado correctamente');
        location.href='../index.php';
        </script> ";
    } else {
        echo " <script> alert ('El proyecto [$nombre] NO se ha modificado correctamente');;
        </script> ";
    }

    mysqli_stmt_close($sentencia);
    mysqli_close($getconex);

}

?>

<h2>EDITAR PROYECTO</h2>
            <br>
            <form action="" method="POST">

                <label for="nombre">ID: </label>
                <input type="text" name="id" id="id" value="<?php echo $id; ?>" readonly> <br><br>
                
                <label for="nombre">Nombre: </label>
                <input type="text" name="nombre" id="nombre" value="<?php echo $nombre; ?>"> <br><br>

                <label for="nombre">Descripcion: </label>
                <input type="text" name="descripcion" id="descripcion" value="<?php echo $descripcion; ?>"> <br><br>

                <label for="nombre">Repositorio: </label>
                <input type="text" name="repo" id="repo" value="<?php echo $repo; ?>"> <br><br>

                <label for="nombre">Demo: </label>
                <input type="text" name="demo" id="demo" value="<?php echo $demo; ?>"> <br><br>

                <label for="nombre">IMG: </label>
                <input type="text" name="img" id="img" value="<?php echo $img; ?>"> <br><br>

                <input type="submit" name="guardar" value="guardar">
            </form>
            <br> <hr>
                
        </section>

</body>
</html>