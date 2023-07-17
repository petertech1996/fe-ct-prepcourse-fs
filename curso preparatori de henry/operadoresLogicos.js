// function mayorYMenor(num){
//     if(num > 5 && num < 10 )console.log(true);
//     else console.log(false);
// };

// mayorYMenor(2);
// mayorYMenor(7);

// function mayorYMenorYPar(num){
//     if(num > 5 && num < 10 && num % 2 === 0 )console.log(true);
//     else console.log(false);
// };

// mayorYMenorYPar(7);
// mayorYMenorYPar(8);

// function operadorOr(str){
//     if(str === 'henry' || str.length<2 ) console.log(true);
//     else console.log(false);
// };
// operadorOr('henry');
// operadorOr('javascript');

// function negacion(permiso){
//     if(permiso) console.log('tiene permiso');

// };

// negacion(true);
// negacion(false);


// function negacion(permiso){
//     if(!permiso) console.log('tiene permiso');

// };

// negacion(true);
// negacion(false);


// function negacion(permiso){
//     if(permiso === true) console.log('tiene permiso');

// };

// negacion(true);


// function negacion(permiso){
//     if(permiso !== true) console.log('tiene permiso');

// };

// negacion(false);

function condicionComplejo(num){
    if(num >9 && num % 2 === 0 || num === 3)console.log(true);
    else console.log(false);
};

condicionComplejo(10);
condicionComplejo(6);
condicionComplejo(3);
condicionComplejo(5);