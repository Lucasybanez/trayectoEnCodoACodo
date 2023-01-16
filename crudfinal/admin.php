<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<style> 

body{
    font-family: 'arial';
}

td{
    border: 1px solid black;
    padding:0 1%;
}
</style>

<?php

    $prueba = "elpepe";

    if(isset($_POST["acceder"])){
    }

    else{
        echo " <script> alert ('Se ha ingresado al administrador sin iniciar sesión, redirigiendo al login');
        location.href='./login.php';
        </script> ";
    }


?>

<form action="" method=""></form>

<section>
        
        <h2> LISTADO DE PROYECTOS</h2>
    
        <table>
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Repositorio</th>
                <th>Demo</th>
                <th>IMG</th>
            </thead>
            <tbody>
                <?php
    
                include("php/conexion.php");
                $getmysql = new mysqlconex();
                $getconex = $getmysql->conectar();
    
                $consulta = "SELECT * FROM proyectos";
                $resultado = mysqli_query($getconex, $consulta);
    
                while($fila=mysqli_fetch_row($resultado)){
                    echo "<tr>";
                    echo "<td>$fila[0]</td>"; //ID
                    echo "<td>$fila[1]</td>"; //Nombre
                    echo "<td>$fila[2]</td>"; //Descripcion
                    echo "<td> <a href='$fila[3]'>$fila[3]<a/> </td>"; //Repo
                    echo "<td> <a href='$fila[4]'>$fila[4]<a/> </td>"; //Demo
                    echo "<td> <a href='$fila[5]'>$fila[5]<a/> </td>"; //IMG
                    echo "<td>
                            <form action='php/eliminar.php' method='POST'>
                            <input type='hidden' name='id' value='$fila[0]'>
                            <input type='hidden' name='nombre' value='$fila[1]'>
                            <input type='hidden' name='descripcion' value='$fila[2]'>
                            <input type='hidden' name='repo' value='$fila[3]'>
                            <input type='hidden' name='demo' value='$fila[4]'>
                            <input type='hidden' name='img' value='$fila[5]'>
                            <input type='submit' name='eliminar' value='eliminar'>
                            </form>
                        </td>";
                    echo "<td>
                            <form action='php/editar.php' method='POST'>
                            <input type='hidden' name='id' value='$fila[0]'>
                            <input type='hidden' name='nombre' value='$fila[1]'>
                            <input type='hidden' name='descripcion' value='$fila[2]'>
                            <input type='hidden' name='repo' value='$fila[3]'>
                            <input type='hidden' name='demo' value='$fila[4]'>
                            <input type='hidden' name='img' value='$fila[5]'>
                            <input type='submit' name='editar' value='editar'>
                        </form>
                    </td>";
                }
    
                mysqli_close($getconex);
                ?>
            </tbody>
        </table>

        <br> <hr>
    
        </section>
        

        <section>

                <h2>AGREGAR PROYECTO</h2>
            <br>
            <form action="php/insertar.php" method="POST">

                <label for="nombre">Nombre: </label>
                <input type="text" name="nombre" id="nombre"> <br><br>

                <label for="nombre">Descripcion: </label>
                <input type="text" name="descripcion" id="descripcion"> <br><br>

                <label for="nombre">Repositorio: </label>
                <input type="text" name="repo" id="repo"> <br><br>

                <label for="nombre">Demo: </label>
                <input type="text" name="demo" id="demo"> <br><br>

                <label for="nombre">IMG: </label>
                <input type="text" name="img" id="img"> <br><br>

                <input type="submit" name="registrar" value="registrar">
            </form>
            <br> <hr>
                
        </section>


    
</body>
</html>