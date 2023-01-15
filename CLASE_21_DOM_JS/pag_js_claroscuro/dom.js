
//creando funcion F
function modoOscuro(){

    // levanto los li, en un array 
    var items = document.getElementsByClassName('list-group-item')
    
    // los pares los pinta, los impares los pinta de blanco 

    for(var i=0;i<items.length;i++){
        if((i % 2 ) ==0){
            items[i].style.backgroundColor ="#663399"
            items[i].style.color="white"
        }
        else{
            items[i].style.backgroundColor = 'white'
        }
    
    }
    // cambio el color de fondo de titulo para el modo oscuro 
    var cabecera = document.getElementById('main-header')
  
    cabecera.style.backgroundColor ="#660099"

    var cuerpo = document.getElementById('cuerpo')
    cuerpo.style.backgroundColor='#353535'

    var principal = document.getElementById('main')
    principal.style.background="#888787"

}
//creando funcion F
function modoClaro(){
  
    // levanto los li, en un array 
    var items = document.getElementsByClassName('list-group-item')
    
    // los pares los pinta, los impares los pinta de blanco 

    for(var i=0;i<items.length;i++){
        if((i % 2 ) ==0){
            items[i].style.backgroundColor ="#FFCCFF"
            items[i].style.color="black"
        }
        else{
            items[i].style.backgroundColor = 'white'
        }
    
    }
    // cambio el color de fondo de titulo para el modo claro
    var cabecera = document.getElementById('main-header')
    cabecera.style.backgroundColor ="#be66f1"

    var cuerpo = document.getElementById('cuerpo')
    cuerpo.style.backgroundColor='white'

    var principal = document.getElementById('main')
    principal.style.background="white"

   
    
}

function AgregarItems(){

    // falta validar que no ingrese null y que no ingrese items repetidos
    // falta incrementar los items con la cantidad del listado de cantidad 
    var cant_items = document.getElementById('select').value
    // creo tantos items como cantidad este indicada
   // console.log(cant_items)
    // levanto el input del html
    var valorBoton = document.getElementById('inputUnico')
    // levanto el value del input
    nuevoLi = valorBoton.value

     for(var i=0;i<cant_items;i++){
        // creo el elemento li
        var li=document.createElement("LI");
        //levanto el ul del html
        var ul = document.getElementById("items")
        // le pongo de id al li creado el contenido del input
        // que va a estar validado que sea unico
    // li.id=nuevoLi
        // al li creado le pongo la clase
        li.className='list-group-item'
        // creo el texto que va a tener el li 
        var text=document.createTextNode(nuevoLi);
        // se lo asigno al li como hijo 
        li.appendChild(text);
        // al ul le asigno el li como hijo 
        document.getElementById("items").appendChild(li);
      
    }
    
    // al insertar los regristro, recorro la lista y pinto los items, dependiente si es modo oscuro o claro
    var cabecera = document.getElementById('main-header')
    console.log(cabecera.style.backgroundColor)
    // esta comparacion no funciona,porque no devuelve el color 
    if (cabecera.style.backgroundColor =="#660099"){
        // modo oscuro
        modoOscuro()
    }
    else{
        
        // modo claro 
        modoClaro()
              
    }
    
   
}



 // levanto los li, en un array 
 var items = document.getElementsByClassName('list-group-item')
    
 // los pares los pinta, los impares los pinta de blanco 

 for(var i=0;i<items.length;i++){
     if((i % 2 ) ==0){
         items[i].style.backgroundColor ="#FFCCFF"
         items[i].style.color="black"
     }
     else{
         items[i].style.backgroundColor = 'white'
     }
 
 }


// LEVANTO LOS BOTONES
var probandoBoton = document.getElementById('button')
var botonModoClaro = document.getElementById('button2')
var botonAgregarItems = document.getElementById('ingresar')

//Agregar una Escucha... listener...  evento escuchador
// este hace la pagina en modo oscuro
probandoBoton.addEventListener('click', modoOscuro)
// este boton hace la pagina modo claro 
botonModoClaro.addEventListener('click',modoClaro)
// este boton agrega items del input a los li
botonAgregarItems.addEventListener('click',AgregarItems)






// ejemplos 


//items[2].textContent = 'hola yesenia'

//items[2].style.fontWeight ='bold'

//items[2].style.backgroundColor = 'yellow'

