const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const somar = function (a,b){
    return a+b;
}

const subtrair = function(a,b){
    return a - b;
}

const multiplicar = function(a,b){
    return a * b;
}

const dividir = function(a,b){
    return a / b;
}

r1.question('Digite o número (a) : ', (a) => {
    r1.question('Digite o segundo número (b): ',(b)=>{
        console.log('1-Somar a + b');
        console.log('2-Subtrair a - b');
        console.log('3-Multiplicar a * b');
        console.log('4-Dividir a / b');

        r1.question('Opcao: ', (opcao) => {
            switch(parseInt(opcao)){
                case 1: console.log(`Resultado: ${somar(parseInt(a),parseInt(b))}`);break;
                case 2: console.log(`Resultado: ${subtrair(parseInt(a),parseInt(b))}`);break;
                case 3: console.log(`Resultado: ${multiplicar(parseInt(a),parseInt(b))}`);break;
                case 4: console.log(`Resultado: ${dividir(parseFloat(a),parseFloat(b))}`);break;
                default: console.log('Opção inválida');
            }
            r1.close();
        });

    });
});

