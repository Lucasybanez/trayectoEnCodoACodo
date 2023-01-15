<?php

    class mysqlconex{


        public function conectar(){
            $enlace = mysqli_connect("localhost", "root","","portafolio");
        return $enlace;
        }

    }

?>

