// Array.prototype.mayoreQueTres = function () {
//     var arregloModificado = [];

//     for (var i = 0; i < this.length; i++) {
//         if (this[i] > 3) {
//             arregloModificado.push(false);
//         } else{ 
//             arregloModificado.push(this[i]);
//         }
//     }

//     return arregloModificado;
// };

// var arreglo = [1, 2, 3, 4, 5];
// var nuevoArreglo = arreglo.mayoreQueTres();

// console.log(nuevoArreglo);

class latinoAmerica {
    constructor() {
        this.paises = [];
    }
}

latinoAmerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};

var continente = new latinoAmerica();
continente.agregarPais("mexico");
console.log(continente.paises);