<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador</title>
    <link rel="stylesheet" href="./css/admin.css">

</head>
<body>

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

<section class="secTablas">
        
        <h2>BUZÓN DE MENSAJES</h2>
    
        <table class="secTablas_tabla">
            <thead class="secTablas_tabla_thead">
                <th>Nombre</th>
                <th>Email</th>
                <th>Asunto</th>
                <th>Mensaje</th>
            </thead>
            <tbody>
                <?php

                include("php/conexion.php");
                $getmysql = new mysqlconex();
                $getconex = $getmysql->conectar();
    
                $consulta = "SELECT * FROM mensajes";
                $resultado = mysqli_query($getconex, $consulta);
    
                while($fila=mysqli_fetch_row($resultado)){
                    echo "<tr>";
                    echo "<td>$fila[0]</td>"; // Nombre
                    echo "<td>$fila[1]</td>"; // Email
                    echo "<td>$fila[2]</td>"; // Asunto
                    echo "<td>$fila[3]</td>"; // Mensaje
                }
    
                mysqli_close($getconex);
                ?>
            </tbody>
        </table>
    
        </section>

        <br>

<section class="secTablas">
        
        <h2> LISTADO DE PROYECTOS</h2>
    
        <table class="secTablas_tabla">
            <thead class="secTablas_tabla_thead">
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Repositorio</th>
                <th>Demo</th>
                <th>IMG</th>
                <th>Eliminar</th>
                <th>Editar</th>
            </thead>

            <tbody>
                <?php
    
                $getmysql = new mysqlconex();
                $getconex = $getmysql->conectar();
    
                $consulta = "SELECT * FROM proyectos";
                $resultado = mysqli_query($getconex, $consulta);
    
                while($fila=mysqli_fetch_row($resultado)){
                    echo "<tr>";
                    echo "<td>$fila[0]</td>"; //ID
                    echo "<td>$fila[1]</td>"; //Nombre
                    echo "<td>$fila[2]</td>"; //Descripcion
                    echo "<td> <a href='$fila[3]' >Ver</td>"; //Repo
                    echo "<td> <a href='$fila[4]' >Ver</td>"; //Demo
                    echo "<td> <a href='$fila[5]' >Ver</td>"; //IMG
                    echo "<td>
                            <form action='php/eliminar.php' method='POST'>
                            <input type='hidden' name='id' value='$fila[0]'>
                            <input type='hidden' name='nombre' value='$fila[1]'>
                            <input type='hidden' name='descripcion' value='$fila[2]'>
                            <input type='hidden' name='repo' value='$fila[3]'>
                            <input type='hidden' name='demo' value='$fila[4]'>
                            <input type='hidden' name='img' value='$fila[5]'>
                            <input type='submit' name='eliminar' value='Borrar'>
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
                            <input type='submit' name='editar' value='Editar'>
                        </form>
                    </td>";
                }
    
                mysqli_close($getconex);
                ?>
            </tbody>
        </table>
    
    </section>

        <br>
        
        <section class="secTablas">

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

                <input type="submit" name="registrar" value="Guardar" class="buttonSubmit">
            </form>
                
        </section>


    
</body>
</html>