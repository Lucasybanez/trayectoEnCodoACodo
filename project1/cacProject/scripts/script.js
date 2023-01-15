var cantidad = document.getElementById("inputCantidad");
var categoria = document.getElementById("categoria");
var btnResumen= document.getElementById("btnResumen");
var btnBorrar= document.getElementById("btnBorrar");
const precio=200;

btnResumen.addEventListener("click",function (evento){
    evento.preventDefault();

    if(categoria.value<=0 || cantidad.value==""){
        alert("Debe completar todos los campos obligatorios");
    } else {
        var labelTotal= document.getElementById("pTotal");
        labelTotal.innerHTML= "Total a pagar: $ "+ (precio*cantidad.value)*categoria.value;  
    }
});

btnBorrar.addEventListener("click",function (evento){
    evento.preventDefault();
    cantidad.value="";
    labelTotal.innerHTML= "Total a pagar: $ ";
});


