<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tp 3</title>
    <link rel="stylesheet" href="./css/styleLogin.css">

</head>
<body>


    <?php
    

    if (isset($_POST["aceptar"])) {

        $usuario = $_POST["usuario"];
        $contraseña = $_POST["contraseña"];

        if($usuario=="administrador" && $contraseña=="cac"){
            echo "<h2 style='color:white;'>Acceso concedido, haga click aquí para ingresar: </h2>
            <form action='./admin.php' method='POST'>
            <input type='submit' name='acceder' value='acceder'>
            </form>
            ";
        }

        else{
            echo " <script> alert('Contraseña o usuario incorrecto'); </script> ";
        }


    }
        
    ?>

    <nav class="paraNav">
        <h1>CRUD Login</h1>
    </nav>
    <div class="centrar">

        <form action="" method="POST">
            <h2>Iniciar sesión</h2>
            <br><br>
            <label for="usuario"> Usuario </label>
            <input type="text" placeholder="Ingrese su usuario" id="usuario" name="usuario">
            
            <br> <br>
            <Label for="contraseña">Contraseña</Label>
            <input type="password" placeholder="Ingrese su contraseña" id="contraseña" name="contraseña">
            <br> <br> <br>
            
            <input type="submit" name="aceptar" value="aceptar">
        </form>

        
    </div>

</body>
</html>