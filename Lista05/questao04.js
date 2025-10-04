
function calcularDelta(a, b, c){
    return(b * b) - (4 * a * c);
}

const delta = calcularDelta(a=2, b=5, c=-3);

console.log("valor de delta é: ", delta);