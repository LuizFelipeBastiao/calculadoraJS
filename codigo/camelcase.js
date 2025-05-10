
const calcula_area_circulo = function (raio, pi) {
    return pi * raio * raio;
}

const numero_pi = 3.14159265359;

let raio_circulo = 2;

console.log(`Area do circulo: ${calcula_area_circulo(parseInt(raio_circulo), parseFloat(numero_pi))}`);
