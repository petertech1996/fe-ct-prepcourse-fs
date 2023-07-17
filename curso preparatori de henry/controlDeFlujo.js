function viajar(destino) {
    if (destino === 'brasil') {
        console.log('Gire a la IZQUIERDA');
    } else if (destino === 'argentina') {
        console.log('Gire a la DERECHA');
    } else {
        console.log('Nos PERDIMOS')
    }
}

// viajar('brasil');

// viajar('argentina');

// viajar('PRUEBA');

function puedeManejar(edad) {
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
} 

puedeManejar(17);

