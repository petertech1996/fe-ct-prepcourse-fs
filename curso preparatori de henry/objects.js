// var seportes = {
//     conbalon: ['football', 'babaskatball', 'rugdy'],
//     sinbalon: ['boxeo', 'surf', 'trekking'],
// };

const { Linter } = require("eslint");

// var persona = {nombre: 'lucas', edad: 26, estudios: {esProgramador: true}};

// // console.log(persona.edad);

// persona.nombre = 'Martin';
// // // console.log(persona.nombre);
// persona.edad = 32;
// // console.log(persona.edad);

// var autos = {};
// autos.marcas = ['ford', 'audi', 'ferrari'];
// delete autos.marcas;
// console.log(autos);

// var miFunciones = {
//     saludar: function (){
//         console.log('hola');
//     },
// };

// miFunciones.saludar();

// var atuendos = { manos: ['guantes', 'anillos'], pies: ['zapatos','soquetes'] };
// // console.log(atuendos.manos);

// atuendos["piernas"] = ["bermudas", "pantalones"];
// // console.log(atuendos);

// var comidas = {};
// var diferenciaDeNotaciones = function (propUno, prorDos){
//     comidas[propUno] = ['Frutas', 'Vegetales'];
//     comidas[prorDos] = ['Hamburguesa', 'Papas fritas'];
// };
// diferenciaDeNotaciones('saludable', 'noSeludable');
// console.log(comidas);

// var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
// var tienePropiedad = libro.hasOwnProperty('autor');
// // var tienePropiedad = libro.hasOwnProperty('nombre');
// // console.log(tienePropiedad);

// metodo keys:
// var todoLasPropiedades = Object.keys(libro);
// console.log(todoLasPropiedades);

// for in:
// var mundo = { continentes:7, paises:195, oceano:5};
// for(var prop in mundo){
//     console.log('Esta es la propiedad:' + prop);
//     console.log('Esta es el valor:' +mundo[prop]);
// }

// this:
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero aleman',
    amistoso: true,
    duaña: 'Maria lopez',
    info: function() {
        console.log('Mi perro es un' + this.raza);
    },
};  

mascota.info();