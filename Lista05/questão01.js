function converterMoeda(valorReais) {
    const taxas = {
        dolar: 0.19, 
        euro: 0.18  
    };

    const convertido = {
        emDolares: (valorReais * taxas.dolar).toFixed(2),
        emEuros: (valorReais * taxas.euro).toFixed(2)
    };

    return convertido;
}

let valor = 100; 
let resultado = converterMoeda(valor);

console.log(`R$${valor} equivalem a:`);
console.log(`US$${resultado.emDolares}`);
console.log(`€${resultado.emEuros}`);
