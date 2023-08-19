// funcion contructora
// function Auto(puertas, color, marca, año, ruedos) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedos = ruedos;

//     this.informacion = function () {
//         console.log('Este es un '+ this.marca + 'de color' + this.color);
//     };
// }

// var miPrimerAuto = new auto(2, 'Rojo', 'Ferrari', 2018, 4);

// miPrimerAuto.informacion();

// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);

// expresion de clases
// class auto {
//     constructor(puertas, color, marca, año, ruedos){
//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedos = ruedos; 
//     }
//     informacion () {
//         console.log('Este es un '+ this.marca + 'de color' + this.color);
//     };
// }




// var miSegundoAuto = new auto(4, 'Blanco', 'Fiat', 2015, 4);

// miSegundoAuto.informacion();

// console.log(miSegundoAuto);
// console.log(miSegundoAuto.marca);

class football {
    constructor(jugador) {
        this.jugador = jugador;
    }

    obtenerNombre() {
        console.log(this.jugador);
    }
}

var argentina = new football('messi');
var brasil = new football('pele');

argentina.obtenerNombre();

brasil.obtenerNombre();