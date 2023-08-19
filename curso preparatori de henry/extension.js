class persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log('Hola, mi nombre es' + this.nombre + '.Tengo' + this.edad);
    }
}

class Programador extends persona {
    constructor(nombre, edad, añosDeExperiencia) {
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }

    codear() {
        console.log(
            'Soy ' +
            this.nombre +
            '. codeo desbe hace ' +
            this.añosDeExperiencia +
            ' años'
        );
    }
}

var martin = new persona('Martin', 26);
var programador = new Programador('maria', 37, 4)
// martin.saludar();
// programador.codear();

programador.saludar();
