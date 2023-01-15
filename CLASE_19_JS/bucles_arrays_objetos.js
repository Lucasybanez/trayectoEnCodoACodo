//* TEMAS DE ESTE ARCHIVO:
// condicional terniario 
//switch
//for clasico
//while
//do
// funciones
//array y objeto literal y sus metodos
//for in 
//for of 
//foreach
//push
//map
//filter, etc



//* operador ternario
// let numero = 5;
// let resultado = numero % 2 == 0 ? "par" : "impar";
// console.log(resultado);

//* switch ejemplo para saber el dia de la semana
/* let dia = 1;
 switch (dia) {
   case 1:
     console.log("Lunes");
     break;
   case 2:
     console.log("Martes");
    break;
   case 3:
     console.log("Miercoles");
     break;
   case 4:
    console.log("Jueves");
     break;
   case 5:
     console.log("Viernes");
     break;
   case 6:
     console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
     break;
   default:
     console.log("No es un dia de la semana");
    break;
 } */





// blucles  para ejecutar un codigo varias veces
// for clasico
/*for (inicialización; condición; actualización) {
    //sentencias a ejecutar en cada iteración
}*/
//*me muestra el valor de i del 0 al 9
/* for (let i = 0; i < 10; i++) {
   console.log(i);
 }*/

//* me muestra el valor de i en cada iteracion, pero va de atras para adelante
/* for (let i = 10; i > 0; i--) {
    console.log(i);
 } */

//* continue ejecuta el codigo que sigue en la proxima vuelta, y lo que esta debajo no se ejecuta
/* for (let i = 0; i < 10; i++) {
     if (i === 5) {
        console.log('Cinco');
         continue;
    }
     console.log(i);
 }   */ 

//*el break corta la ejecucion del ciclo
/* for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Cinco');
        break;
    }
     console.log(i);
} */

//* se ejecuta si se cumple la condicion 
/* let i = 0;
 while (i < 10) {
    console.log(i);
    i++;
 } */
 /*
 var color = "";
 while (color != "rojo"){
       color = prompt("dame un color (escribe rojo para salir)")
    } */

// *se ejecuta al menos una vez
/* let i = 0;
 do {
    console.log(i);
    i++
} while (i < 10); */
//* Los arrays se utilizan cuando almacenamos múltiples valores de una sola variable, mientras que un objeto puede contener múltiples variables con sus valores.

//* array vacio
//let estudiantes = [];

//*agregar elementos al array
/*for (let i = 0; i < 10; i++) {
    estudiantes.push('Estudiante ${i}');
}
console.log(estudiantes); */

/*
for (let i in estudiantes) {
    console.log(estudiantes[i]);
}*/

/*
for (let estudiante of estudiantes) {
    console.log(estudiante);
}*/
//*porque usamos const para declarar un array o un objeto, si en realidad podemos cambiar sus valores ? es decir son mutables
/*const estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];
estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel', 'Juan'];
console.log(estudiantes);*/
//* los objetos y los arrays son mutables, es decir, podemos modificarlos, pero cuando los declaramos como const lo que no podemos modificar es su referencia en memoria, es decir, no podemos cambiar el valor de la variable, pero si podemos modificar los valores de los objetos y los arrays que contiene. a diferencia de las variables nativas de js que cuando las declaramos const no podemos modificar su valor, porque su valor es constante y no su referencia en memoria. algo importante a entender es que cuando se crea un objeto es decir se referencia, no se guarda en memoria su valor, sino que se guarda una " direccion de memoria" que se le llama referencia y es la que se guarda en la variable, por eso cuando declaramos un objeto como const no podemos cambiar su referencia en memoria, pero si podemos modificar sus valores.



//* ejemplo de objeto literal
/* const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 40
}
console.log(persona); */

//* metodo push para agregar elementos al array
/* const autos = ['BMW', 'Audi', 'Volvo'];
autos.push('Mercedes Benz');
console.log(autos); */
//* metodo pop quitar el ultimo elemento del array
/* const autos = ['BMW', 'Audi', 'Volvo'];
autos.pop();
console.log(autos); */
//* metodo unshift para agregar elementos al inicio del array
/* const autos = ['BMW', 'Audi', 'Volvo'];
autos.unshift('Mercedes Benz');
console.log(autos); */
//* metodo shift para quitar el primer elemento del array
/* const autos = ['BMW', 'Audi', 'Volvo'];
autos.shift();
console.log(autos); */
//* metodo splice para eliminar elementos del array
/* const autos = ['BMW', 'Audi', 'Volvo'];
autos.splice(1, 1);
console.log(autos); */
//* metodo splice para agregar elementos al array
/* const autos = ['BMW', 'Audi', 'Volvo'];
autos.splice(1, 0, 'Mercedes Benz');
console.log(autos); */
//* metodo splice para reemplazar elementos del array
/* const autos = ['BMW', 'Audi', 'Volvo'];
autos.splice(1, 1, 'Mercedes Benz');
console.log(autos); */
//* metodo slice para copiar un array
/* const autos = ['BMW', 'Audi', 'Volvo'];
const copiaAutos = autos.slice();
console.log(copiaAutos); */
//* metodo slice para copiar un array desde un indice
/* const autos = ['BMW', 'Audi', 'Volvo'];
const copiaAutos = autos.slice(1);
console.log(copiaAutos); */
//* metodo slice para copiar un array desde un indice hasta otro
/* const autos = ['BMW', 'Audi', 'Volvo'];
const copiaAutos = autos.slice(1, 2);
console.log(copiaAutos); */
//* metodo indexOf para buscar un elemento en el array
/* const autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos.indexOf('Volvo')); */
//* metodo lastIndexOf para buscar un elemento en el array
/* const autos = ['BMW', 'Audi', 'Volvo', 'Audi'];
console.log(autos.lastIndexOf('Audi')); */
//* metodo find para buscar un elemento en el array
/* const autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos.find(auto => auto === 'Volvo')); */
//* metodo findIndex para buscar un elemento en el array
/* const autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos.findIndex(auto => auto === 'Volvo')); */
//* metodo includes para buscar un elemento en el array
/* const autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos.includes('Volvo')); */



//* array de objetos literales
/* const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
 ] */

//* recorrer un array de objetos
/*
carrito.forEach(element => {
    console.log(element.nombre);  
}); */

//* recorrer un array de objetos obteniendo el largo del array y de cada posicion del array levantar el nombre y el precio
/* for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
 } */

//* recorre el array de objetos mostrando el nombre y el precio 
/* carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
 }); */

 // metodos de arrays 
//* crear un nuevo array de objetos que va a devolver nombre y precio con map
/* const nuevoArreglo = carrito.map(function(producto) {
     return `${producto.nombre} - Precio: ${producto.precio}`;
 }); 

 console.log(nuevoArreglo); */

//* recorre el array de objetos y devuelve un nuevo array con los nombres de  productos 
/* const arreglo2 = carrito.map(function(producto) {
     return producto.nombre;
});

 console.log(arreglo2); */
//* recorre el array de objetos y devuelve un nuevo array con los productos que tengan un precio mayor a 400
/* const arreglo3 = carrito.filter(function(producto) {
    return producto.precio > 400;
});
console.log(arreglo3); */

/* const resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
});

console.log(resultado); */

/* const resultado = carrito.every(function(producto) {
   return producto.nombre === 'Celular';
 }); 

 console.log(resultado);*/

/* const resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);

console.log(resultado); */

//* metodos de arrays 

// sample array of students
const students = [
    {
      name: "Jill",
      lastname: "Doe",
      age: 24,
      course: "Marketing",
    },
    {
      name: "John",
      lastname: "Doe",
      age: 22,
      course: "Web Development",
    },
    {
      name: "Jack",
      lastname: "Doe",
      age: 20,
      course: "Accounting",
    },
    {
      name: "Ryan Jhon",
      lastname: "Ray",
      age: 23,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 20,
      course: "Financial Management",
    },
  ];
  
  // Write your code here!
  console.log(students)

//* como recorrer un array de objetos con metodos de array de map, filter, find, reduce, some, every

//* map : recorre el array de objetos y devuelve un nuevo array con los nombres de  estudiantes
   /* const arreglo2 = students.map(function (student) {
      return student.name;
    });*/
    
//* este metodo es con una funcion flecha  
     /*
    const names = students.map(student => student.name);    */

//* puedo cambiar los datos del objetos 
    /* const names = students.map(student => {
        return {
            name: student.name + ' ' + student.lastname,
            age: student.age
        }   
    }); */

//* js nos provee los spread operator para no tener que escribir todo el objeto, algo importante es que map no altera el array original
    /* const names = students.map(student => {     
        return {
            ...student, // todos los datos del estudiantes copiados
            title : student.name + ' ' + student.course
            // aca puedo tamnbien alterar los datos del objeto
        }
    }); */
//* otra manera de escribir más abreviado lo de arriba sin el return :
    /* const names = students.map(student => ({
        ...student,
        title : student.name + ' ' + student.course
    })); */


 //* metodo foreach : 
    /* students.forEach(function (student, index , students) {) {    
        console.log(student.name);
        console.log(index);
        console.log(students);
    });*/
//* foreach con funcion flecha
    /*students.forEach(() => {
        console.log(student.name);
    }); */
    /*
    const fullnames =[];
    students.forEach((student) => {
        fullnames.push('${student.lastname}');
    });*/
//* metodo filter : recorre el array de objetos y devuelve un nuevo array con los estudiantes que tengan un curso de web development
    /* const webStudents = students.filter(function (student) { 
        return student.course === 'Web Development';
    });*/
//* metodo filter abreviado
    /* const webStudents = students.filter(student => student.course === 'Web Development'); */
//* metodo find : recorre el array de objetos y devuelve el primer objeto que cumpla con la condicion
    /* const webStudent = students.find(student => student.course === 'Web Development'); */
//* metodo reduce : recorre el array de objetos y devuelve un valor unico
    /* const total = students.reduce(function (total, student) {
        return total + student.age;
    }, 0); */
//* metodo reduce abreviado
    /* const total = students.reduce((total, student) => total + student.age, 0); */
//* metodo some : recorre el array de objetos y devuelve true si al menos un objeto cumple con la condicion
    /* const hasWebStudents = students.some(student => student.course === 'Web Development'); */
//* metodo every : recorre el array de objetos y devuelve true si todos los objetos cumplen con la condicion
    /* const allWebStudents = students.every(student => student.course === 'Web Development'); */
//* metodo sort :
    /* const sortedStudents = students.sort(function (a, b) {
        return a.age - b.age;
    }); */
//* metodo sort abreviado
    /* const sortedStudents = students.sort((a, b) => a.age - b.age); */
//* metodo reverse :
    /* const reversedStudents = students.reverse(); */

    


